import React from 'react';
import { Button } from '@mui/material';
import { TextLink, Hspace, Wspace } from 'components/common';
import { CenteredLayout } from 'components/layout';

const Home: React.FC = () => {
  return (
    <CenteredLayout>
      <div>Home</div>
      <TextLink to="/signIn">
        <Button variant="contained">Sign In</Button>
      </TextLink>
      <Wspace width={1} />
      <TextLink to="/signUp">
        <Button variant="contained">Sign Up</Button>
      </TextLink>
      <Hspace height={2} />
      <TextLink to="/">
        <Button variant="contained">GO</Button>
      </TextLink>
    </CenteredLayout>
  );
};

export default Home;
