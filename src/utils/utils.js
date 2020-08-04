export function getState(state, statePath) {
  const properties = statePath.split('.');
  let nestedState = state;
  properties.forEach(property => (nestedState = nestedState[property]));
  return nestedState;
}
