import React from 'react';
import Header from './Header.js';
import DisplayInfo from './DisplayInfo';
import Buttons from './Buttons';
import Total from './Total';
import Submit from './Submit';
import MaskingDiv from './MaskingDiv';
import '../index.css';

function App() {
  return (
    <div className='app'>
      <section className='info'>
        <h1>Get Your Tickets!</h1>

        <Header event={'Horse Racing'} />
        <DisplayInfo statePath={'state.horse'} />
        <Buttons type={{ increment: 'HORSE_INC', decrement: 'HORSE_DEC' }} />

        <Header event={'Boxing'} />
        <DisplayInfo statePath={'state.boxing'} />
        <Buttons type={{ increment: 'BOXING_INC', decrement: 'BOXING_DEC' }} />

        <Header event={'Baseball'} />
        <DisplayInfo statePath={'state.baseball'} />
        <Buttons type={{ increment: 'BASEBALL_INC', decrement: 'BASEBALL_DEC' }} />
      </section>

      <Total />
      <br />
      <Submit />
      <MaskingDiv />
    </div>
  );
}

export default App;
