// AppRouter.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import App from './App';
import Landing from './landing';
import Chat from './components/mycomponents/chat';
import { RedirectToSignIn, SignedIn, SignedOut,RedirectToSignUp } from '@clerk/clerk-react';

const AppRouter = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/app" element={<>
          <SignedIn><App/></SignedIn>
          <SignedOut><RedirectToSignIn/></SignedOut>
          </>} />
          <Route path="/chat/:chatid?" element={<>
          <SignedIn><Chat/></SignedIn>
          <SignedOut><RedirectToSignIn/></SignedOut>
          </>} />

          <Route path="/start" element={<>
          <SignedIn><App/></SignedIn>
          <SignedOut><RedirectToSignUp/></SignedOut>
          </>} />

        
        </Routes>
      </Router>
    );
  };

export default AppRouter;
