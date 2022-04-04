import React from 'react';

/* import ImageButton from './components/ImageButton'; */

/* import Table from './components/Table'; */

import Inputs from './components/Inputs';

function App() {
  return (
    <div className="App">
      <Inputs inputType={"email"} labelText={"Email"} placeholderText={"email@email.com"} />

      <Inputs inputType={"password"} labelText={"Password"} placeholderText={"password"}/>

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
