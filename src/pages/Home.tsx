import React from 'react';
import { Button } from '@mui/material';
import { TextLink, Hspace, Wspace } from 'components/common';
import { CenteredLayout } from 'components/layout';

const Home: React.FC = () => {
  return (
    <CenteredLayout>
      <div>Home</div>
      <Button variant="contained">
        <TextLink to="/signIn" name="Sign In" />
      </Button>
      <Wspace width={1} />
      <Button variant="contained">
        <TextLink to="/signUp" name="Sign Up" />
      </Button>
      <Hspace height={2} />
      <Button variant="contained">
        <TextLink to="/" name="GO" />
      </Button>
    </CenteredLayout>
  );
};

export default Home;
