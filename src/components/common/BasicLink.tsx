import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
  color: 'darkslategray',
  textDecoration: 'none',
});

interface StyledLinkProps {
  to: string;
  name: string;
}

const BasicLink: React.FC<StyledLinkProps> = ({ to, name }) => {
  return <StyledLink to={to}>{name}</StyledLink>;
};

export default BasicLink;
