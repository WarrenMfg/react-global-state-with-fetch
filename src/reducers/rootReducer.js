import { useReducer } from 'react';
import { horseReducer, horseInitialState } from './horseReducer';
import { boxingReducer, boxingInitialState } from './boxingReducer';
import { baseballReducer, baseballInitialState } from './baseballReducer';
import { loadingReducer, loadingInitialState } from './loadingReducer';

function rootReducer() {
  const [ horse, horseDispatch ] = useReducer(horseReducer, horseInitialState);
  const [ boxing, boxingDispatch ] = useReducer(boxingReducer, boxingInitialState);
  const [ baseball, baseballDispatch ] = useReducer(baseballReducer, baseballInitialState);
  const [ loading, loadingDispatch ] = useReducer(loadingReducer, loadingInitialState);

  const combinedDispatches = [ horseDispatch, boxingDispatch, baseballDispatch, loadingDispatch ];

  // combined state
  return {
    state: {
      horse,
      boxing,
      baseball
    },
    loading,
    dispatch: payload => combinedDispatches.forEach(d => d(payload))
  };
}

export default rootReducer;
