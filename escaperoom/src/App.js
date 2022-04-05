import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Start from './pages/Start';
import SignUp from './pages/SingUp';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}>
            <Route index element={<SignUp/>}></Route>
            <Route path="/login" element={<LogIn/>}></Route>

            <Route path="*" element={<div>Error 404</div>}></Route>
          </Route>
        </Routes>

      </BrowserRouter>

      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
