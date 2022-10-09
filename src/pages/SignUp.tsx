import React, { useState } from 'react';
import { Box, Button, ButtonGroup, styled, TextField } from '@mui/material';
import { CenteredLayout } from 'components/layout';
import { Hspace } from 'components/common';

const StyledFormWrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

type SelectButton = 0 | 1 | 2;

const SignUp: React.FC = () => {
  const [selectButton, setSelectButton] = useState<SelectButton>(0);

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
              variant={selectButton == 1 ? 'contained' : 'outlined'}
              onClick={() => {
                setSelectButton(1);
              }}
            >
              Teacher
            </Button>
            <Button
              variant={selectButton == 2 ? 'contained' : 'outlined'}
              onClick={() => {
                setSelectButton(2);
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
