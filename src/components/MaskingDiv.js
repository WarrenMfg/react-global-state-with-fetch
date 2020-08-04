import React from 'react';
import withGlobalStore from './withGlobalStore';

function MaskingDiv({ globalStore: { loading: { isLoading } } }) {
  return (
    <div className='masking-div' style={{ display: `${isLoading ? 'block' : 'none'}` }}>
      <img src='spinner.gif' width='100' height='100' />
    </div>
  );
}

export default withGlobalStore(MaskingDiv);
