export function loadingReducer(state, action) {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        isLoading: true
      };
    case 'IS_NOT_LOADING':
      return {
        isLoading: false
      };
    default:
      return state;
  }
}

export const loadingInitialState = {
  isLoading: false
};
