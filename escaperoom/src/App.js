import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Start from './pages/Start';
import SignUp from './pages/SingUp';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';

function App() {

  /* f e t c h call from web service (db) */

  const data = [{
    number: 1,
    name: 'Elvis',
    time: 10, 
    score: 10, Achievements: 'x'
  }]

  return (
    <div className="App">

      {/* <Profile profileName={"profileName"}/> */}

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Start/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/login" element={<LogIn/>}></Route>
          <Route path="*" element={<div>Error 404</div>}></Route>
        </Routes>
      </BrowserRouter>

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
