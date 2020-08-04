import React from 'react';
import rootReducer from '../reducers/rootReducer';
const { Provider, Consumer: StoreConsumer } = React.createContext();

function GlobalStore({ children }) {
  const combinedState = rootReducer();
  return <Provider value={combinedState}>{children}</Provider>;
}

export { GlobalStore, StoreConsumer };
