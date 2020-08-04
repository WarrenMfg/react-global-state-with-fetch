import React from 'react';
import withGlobalStore from './withGlobalStore';

function MaskingDiv({ globalStore: { loading: { isLoading } } }) {
  return (
    <div className='masking-div' style={{ display: isLoading ? 'flex' : 'none' }}>
      <img src='twitter.png' height='180' width='180' alt='Loading...' />
    </div>
  );
}

export default withGlobalStore(MaskingDiv);
