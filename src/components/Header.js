import React from 'react';

function Header() {
  console.log('Header')
  return (
    <>
      <h1>Tronald Dump</h1>
      <small><a className='api-link' href='https://www.tronalddump.io/' target='_blank'>tronalddump.io</a></small>
    </>
  );
}

export default React.memo(Header);
