import React from 'react';
import { submit } from '../actions/submit';
import withGlobalStore from './withGlobalStore';

function Submit({ globalStore: { state, dispatch } }) {
  return <button onClick={() => submit(state, dispatch)}>Submit Your Order</button>;
}

export default withGlobalStore(Submit);
