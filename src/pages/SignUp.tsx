import React, { useState } from 'react';
import { Box, Button, ButtonGroup, styled, TextField } from '@mui/material';
import { CenteredLayout } from 'components/layout';
import { Hspace } from 'components/common';

const StyledFormWrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

enum Auth {
  None = 0,
  Teacher = 1,
  Student = 2,
}

const SignUp: React.FC = () => {
  const [selectedAuth, setSelectedAuth] = useState(Auth.None);

  return (
    <CenteredLayout>
      <Hspace height={5} />

      <StyledFormWrapper>
        <Box
          component="form"
          sx={{
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField required label="Name" variant="outlined" type="text" />
          <Hspace height={1} />
          <TextField required label="Email" variant="outlined" type="email" />
          <Hspace height={1} />
          <TextField
            required
            label="Password"
            variant="outlined"
            type="password"
          />
          <Hspace height={1} />
          <TextField
            required
            label="Comfirm Password"
            variant="outlined"
            type="password"
          />
          <Hspace height={1} />
          <ButtonGroup fullWidth>
            <Button
              variant={selectedAuth == Auth.Teacher ? 'contained' : 'outlined'}
              onClick={() => {
                setSelectedAuth(Auth.Teacher);
              }}
            >
              Teacher
            </Button>
            <Button
              variant={selectedAuth == Auth.Student ? 'contained' : 'outlined'}
              onClick={() => {
                setSelectedAuth(Auth.Student);
              }}
            >
              Student
            </Button>
          </ButtonGroup>
          <Hspace height={1} />
          <Button variant="contained">Sign UP</Button>
        </Box>
      </StyledFormWrapper>
    </CenteredLayout>
  );
};

export default SignUp;
