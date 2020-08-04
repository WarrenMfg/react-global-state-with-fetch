import React from 'react';
import withGlobalStore from './withGlobalStore';

function DisplayQuotes({ globalStore: { state: { apiState: { quotes } } } }) {
  return (
    <div className='quotes'>
      {quotes.map((quote, i) => {
        return (
          <div className='quote' key={i}>
            <a href={quote.href} target='_blank'>
              <img src='twitter.png' width='180' height='180' />
            </a>
            <p>{quote.quote}</p>
          </div>
        );
      })}
    </div>
  );
}

export default withGlobalStore(DisplayQuotes);
