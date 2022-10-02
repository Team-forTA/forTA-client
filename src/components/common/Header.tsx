import React from 'react';
import { styled } from '@mui/system';
import BasicLink from './BasicLink';

const StyledHeader = styled('header')({
  height: '60px',
  color: 'darkslategray',
  padding: 16,
  backgroundColor: 'aliceblue',
  borderRadius: 4,
  fontSize: 20,
  fontWeight: 'bold',
});

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <BasicLink to="/" name="forTA" />
    </StyledHeader>
  );
};

export default Header;
