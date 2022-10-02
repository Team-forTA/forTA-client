import React from 'react';
import { Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <div>
      <div>Home</div>
      <Button variant="contained">Sign In</Button>
      <Button variant="contained">Sign Up</Button>
      <br />
      <Button variant="contained">Go</Button>
    </div>
  );
};

export default Home;
