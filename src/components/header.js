import React from 'react';

import TopNav from './top-nav';

import './header.css';

export default function Header(props) {
  return (
    <header>
      <TopNav />
      {/* // Removed all this stuff
      //   onGenerateAuralUpdate={() => props.onGenerateAuralUpdate()}
      //   onRestartGame={() => props.onRestartGame()}
      // /> */}
      <h1>HOT or COLD</h1>
    </header>
  );
}

// Why don't we require connect?