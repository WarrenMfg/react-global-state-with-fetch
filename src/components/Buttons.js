import React from 'react'
import withGlobalStore from './withGlobalStore'

function Buttons({globalStore: {dispatch}, type}) {
  return (
    <>
      <button 
        onClick={() => dispatch({type: type.decrement})}
      >Decrement</button>
      <button 
        onClick={() => dispatch({type: type.increment})}
      >Increment</button>
    </>
  )
}

export default withGlobalStore(Buttons)
