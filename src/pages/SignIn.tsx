import React from 'react';
import { Box, Button, styled, TextField } from '@mui/material';
import { CenteredLayout } from 'components/layout';
import { Hspace } from 'components/common';

const StyledFormWrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

const SignIn: React.FC = () => {
  return (
    <CenteredLayout>
      <Hspace height={5} />
      <StyledFormWrapper>
        <Box
          component="form"
          sx={{
            width: '240px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField required label="Email" variant="outlined" type="email" />
          <Hspace height={1} />
          <TextField
            required
            label="Password"
            variant="outlined"
            type="password"
          />
          <Hspace height={1} />
          <Button variant="contained">Sign In</Button>
        </Box>
      </StyledFormWrapper>
    </CenteredLayout>
  );
};

export default SignIn;
