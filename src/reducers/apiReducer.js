export function apiReducer(state, action) {
  switch (action.type) {
    case 'ORDERED_TAGS': {
      return {
        ...state,
        tags: action.payload
      };
    }
    case 'SHOW_QUOTES':
      return {
        ...state,
        quotes: action.payload,
        meme: ''
      };
    case 'CLEAR_QUOTES':
      return {
        ...state,
        quotes: []
      };
    case 'SHOW_MEME':
      return {
        ...state,
        meme: action.payload
      };
    default:
      return state;
  }
}

export const apiInitialState = {
  tags: [],
  quotes: [],
  meme: ''
};
