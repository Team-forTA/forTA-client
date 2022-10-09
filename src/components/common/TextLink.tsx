import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

interface StyledLinkProps {
  to: string;
  name?: string;
  children?: ReactNode;
}

const TextLink: React.FC<StyledLinkProps> = ({ to, name, children }) => {
  return <StyledLink to={to}>{name || children}</StyledLink>;
};

export default TextLink;
