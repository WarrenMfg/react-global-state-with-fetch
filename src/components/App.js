import React, { useEffect } from 'react';
import withGlobalStore from '../components/withGlobalStore';
import { fetchTags } from '../actions/fetch';
import Header from './Header.js';
import '../index.css';

function App({ globalStore: { dispatch } }) {
  useEffect(() => {
    fetchTags(dispatch);
  }, []);
  return (
    <div className='app'>
      <Header />
    </div>
  );
}

export default withGlobalStore(App);
