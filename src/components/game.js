import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default function Game(props) {
  //Most of this logic got moved to the reducer, 
  //the props got moved into the componets

    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection />
          <StatusSection />
          <InfoSection />
        </main>
      </div>
    );
}