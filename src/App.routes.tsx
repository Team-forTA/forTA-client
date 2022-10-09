import React from 'react';
import { Home, SignIn, SignUp } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  );
};
