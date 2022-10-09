import React from 'react';
import { Button } from '@mui/material';
import { TextLink, Hspace, Wspace } from 'components/common';

const Home: React.FC = () => {
  return (
    <div>
      <div>Home</div>
      <Button variant="contained">
        <TextLink to="/" name="Sign In" />
      </Button>
      <Wspace width={1} />
      <Button variant="contained">
        <TextLink to="/" name="Sign Up" />
      </Button>
      <Hspace height={2} />
      <Button variant="contained">
        <TextLink to="/" name="GO" />
      </Button>
    </div>
  );
};

export default Home;
