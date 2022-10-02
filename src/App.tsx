import React from 'react';
import { Header } from 'components/common';
import { AppRoute } from 'App.routes';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <AppRoute />
    </div>
  );
}

export default App;
