export function apiReducer(state, action) {
  switch (action.type) {
    case 'ORDERED_TAGS': {
      return {
        tags: action.payload
      };
    }
    default:
      return state;
  }
}

export const apiInitialState = {
  tags: []
};
