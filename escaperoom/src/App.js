import React from 'react';

import ImageButton from './components/ImageButton';

function App() {
  return (
    <div className="App">
      <ImageButton picname={'profile'} caption={"Profile"} />
      <ImageButton picname={"leaderboard"} caption={"Leaderboard"} />
      <ImageButton picname={"help"} caption={"Help"} />

      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
