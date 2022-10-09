import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

interface StyledLinkProps {
  to: string;
  name: string;
}

const TextLink: React.FC<StyledLinkProps> = ({ to, name }) => {
  return <StyledLink to={to}>{name}</StyledLink>;
};

export default TextLink;
