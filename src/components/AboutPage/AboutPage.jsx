import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>What does "sifr" mean, you might ask? (I know you probably won't, but I need some sort of set-up here)</p>
        <p>Literally, it's the Arabic word for "zero", but it's also </p>
      </div>
    </div>
  );
}

export default AboutPage;
