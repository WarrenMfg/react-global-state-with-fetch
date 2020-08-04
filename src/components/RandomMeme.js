import React, { useEffect } from 'react';
import { fetchMeme } from '../actions/fetch';
import withGlobalStore from './withGlobalStore';

function RandomMeme({ globalStore: { state: { apiState: { quotes, meme } }, dispatch } }) {
  useEffect(
    () => {
      if (!quotes.length) {
        fetchMeme(dispatch);
      }
    },
    [ quotes ]
  );

  return (
    <div className='meme' style={{ display: meme ? 'block' : 'none' }}>
      <img src={meme} alt='Tronald Dump Meme' />
    </div>
  );
}

export default withGlobalStore(RandomMeme);
