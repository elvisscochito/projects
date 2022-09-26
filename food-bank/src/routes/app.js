import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import Start from '../pages/Start';
import Survey from '../pages/Survey';
import PageNotFound from '../pages/PageNotFound';

function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<Start />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LogIn />} />

                    <Route path="/home" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/survey" element={<Survey />} />

                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default AppRouter;
