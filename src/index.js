import React from 'react';
import { render } from 'react-dom';
import { GlobalStore } from './components/GlobalStore';
import App from './components/App';

render(
  <GlobalStore>
    <App />
  </GlobalStore>,
  document.getElementById('root')
);
