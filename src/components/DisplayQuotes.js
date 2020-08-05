import React from 'react';
import twitter from '../twitter.png';
import withGlobalStore from './withGlobalStore';

function DisplayQuotes({ globalStore: { quotes } }) {
  return (
    <div className='quotes'>
      {quotes.map((quote, i) => {
        return (
          <div className='quote' key={i}>
            <a href={quote.href} target='_blank'>
              <img src={twitter} width='180' height='180' />
            </a>
            <p>{quote.quote}</p>
          </div>
        );
      })}
    </div>
  );
}

export default withGlobalStore(DisplayQuotes);
