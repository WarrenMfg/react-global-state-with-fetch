import React from 'react';
import withGlobalStore from './withGlobalStore';
import { getState } from '../utils/utils';

function DisplayInfo({ globalStore, statePath }) {
  const { price, quantity, subtotal } = getState(globalStore, statePath);
  return (
    <h3>
      <span className='price'>Price: ${price}</span> ×{' '}
      <span className='quantity'>Quantity: {quantity}</span> ={' '}
      <span className='subtotal'>Subtotal: ${subtotal}</span>
    </h3>
  );
}

export default withGlobalStore(DisplayInfo);
