import React from 'react';
import { styled } from '@mui/system';
import TextLink from './TextLink';

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
      <TextLink to="/" name="forTA" />
    </StyledHeader>
  );
};

export default Header;
