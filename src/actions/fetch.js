const orderTags = tags => {
  const tagsArr = tags._embedded.tag;

  return tagsArr.map(obj => obj.value).sort();
};

export const fetchTags = async dispatch => {
  try {
    dispatch({ type: 'IS_LOADING' });
    const res = await fetch('https://www.tronalddump.io/tag');
    const dirtyTags = await res.json();

    const orderedTags = orderTags(dirtyTags);
    console.log(orderedTags);

    dispatch({ type: 'ORDERED_TAGS', payload: orderedTags });
    dispatch({ type: 'IS_NOT_LOADING' });
  } catch (err) {
    console.log(err.message, err.stack);
  }
};
