import Home from 'pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
