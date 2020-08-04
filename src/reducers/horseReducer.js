export function horseReducer(state, action) {
  switch (action.type) {
    case 'HORSE_INC': {
      const newQuantity = state.quantity + 1;
      return {
        ...state,
        quantity: newQuantity,
        subtotal: newQuantity * state.price
      };
    }
    case 'HORSE_DEC': {
      const newQuantity = state.quantity > 0 ? state.quantity - 1 : 0;
      return {
        ...state,
        quantity: newQuantity,
        subtotal: newQuantity * state.price
      };
    }
    case 'RESET':
      return {
        ...state,
        quantity: 0,
        subtotal: 0
      };
    default:
      return state;
  }
}

export const horseInitialState = {
  price: 2,
  quantity: 0,
  subtotal: 0
};
