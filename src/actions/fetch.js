const orderTags = tags => {
  const tagsArr = tags._embedded.tag;
  return tagsArr.map(obj => obj.value).sort();
};

const extractQuotes = dirtyData => {
  const quotesArr = dirtyData._embedded.quotes;
  return quotesArr.map(quote => {
    const quoteObj = {};
    quoteObj.quote = quote.value;
    quoteObj.href = quote._embedded?.source[0]?.url || 'https://twitter.com/realDonaldTrump';
    return quoteObj;
  });
};

export const fetchMeme = async dispatch => {
  try {
    dispatch({type: 'IS_LOADING'});
    const res = await fetch('https://www.tronalddump.io/random/meme');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);

    dispatch({type: 'SHOW_MEME', payload: url});
    dispatch({ type: 'IS_NOT_LOADING' });
  } catch (err) {
    console.log(err.message, err.stack);
  }
}

export const fetchTags = async dispatch => {
  try {
    dispatch({ type: 'IS_LOADING' });
    const res = await fetch('https://www.tronalddump.io/tag');
    const dirtyTags = await res.json();

    const orderedTags = orderTags(dirtyTags);

    dispatch({ type: 'ORDERED_TAGS', payload: orderedTags });
  } catch (err) {
    console.log(err.message, err.stack);
  }
};

export const fetchTopic = async (dispatch, topic) => {
  try {
    dispatch({ type: 'IS_LOADING' });
    const res = await fetch(`https://www.tronalddump.io/search/quote?tag=${topic}`);
    const dirtyData = await res.json();

    const quotes = extractQuotes(dirtyData);

    dispatch({ type: 'SHOW_QUOTES', payload: quotes });
    dispatch({ type: 'IS_NOT_LOADING' });
  } catch (err) {
    console.log(err.message, err.stack);
  }
};
