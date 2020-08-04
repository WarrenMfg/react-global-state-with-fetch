import React, { useEffect } from 'react';
import withGlobalStore from '../components/withGlobalStore';
import { fetchTags } from '../actions/fetch';
import Header from './Header.js';
import SelectTags from './SelectTags';
import RandomMeme from './RandomMeme';
import DisplayQuotes from './DisplayQuotes';
import MaskingDiv from './MaskingDiv';
import '../index.css';

function App({ globalStore: { dispatch } }) {
  useEffect(() => {
    fetchTags(dispatch);
  }, []);
  return (
    <div className='app'>
      <Header />
      <SelectTags />
      <RandomMeme />
      <DisplayQuotes />
      <MaskingDiv />
    </div>
  );
}

export default withGlobalStore(App);
