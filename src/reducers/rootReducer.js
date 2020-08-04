import { useReducer } from 'react';
import { apiReducer, apiInitialState } from './apiReducer';
import { loadingReducer, loadingInitialState } from './loadingReducer';

function rootReducer() {
  const [ loading, loadingDispatch ] = useReducer(loadingReducer, loadingInitialState);
  const [ apiState, apiDispatch ] = useReducer(apiReducer, apiInitialState);

  const combinedDispatches = [ loadingDispatch, apiDispatch ];

  // combined state
  return {
    state: {
      apiState
    },
    loading,
    dispatch: payload => combinedDispatches.forEach(d => d(payload))
  };
}

export default rootReducer;
