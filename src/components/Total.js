import React from 'react';
import withGlobalStore from './withGlobalStore';
import { calcTotal } from '../utils/utils';

function Total({ globalStore: { state } }) {
  return <h1 className='total'>Total Due: ${calcTotal(state)}</h1>;
}

export default withGlobalStore(Total);
