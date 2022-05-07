import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProtectedRoute from './services/ProtectedRoute';

import Start from './pages/Start';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Layout from './styles/layout/Layout';
import Home from './pages/Home';
import Social from './pages/Social';
import Profile from './pages/Profile';
import Leadboard from './pages/Leadboard';
import Help from './pages/Help';
import Docs from './pages/Docs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Start/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn/>}></Route>

          <Route path='/home' element={<Layout/>}>
            <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
            <Route path='leadboard' element={<Leadboard/>}></Route>
            <Route path='social' element={<Social/>}></Route>
            <Route path='help' element={<Help/>}></Route>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='docs' element={<Docs/>}></Route>

            {/* user is a dnyamic route with a username segment */}
            <Route path="user/:username" element={<Profile/>}></Route>
          </Route>

          <Route path="*" element={<div>Error 404</div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
