export function getState(state, statePath) {
  const properties = statePath.split('.');
  let nestedState = state;
  properties.forEach(property => (nestedState = nestedState[property]));
  return nestedState;
}

export function calcTotal(state) {
  const keys = Object.keys(state);
  return keys.reduce((acc, key) => {
    return acc + state[key].price * state[key].quantity;
  }, 0);
}
