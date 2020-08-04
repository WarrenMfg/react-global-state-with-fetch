import React from 'react';
import { StoreConsumer } from './GlobalStore';

export default function withGlobalStore(Component) {
  return function(props) {
    return (
      <StoreConsumer>
        {globalStore => <Component {...props} globalStore={globalStore} />}
      </StoreConsumer>
    );
  };
}
