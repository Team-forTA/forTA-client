import React, { ReactNode } from 'react';
import { styled } from '@mui/system';

const StyledLayoutWrapper = styled('div')`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
`;

interface CenteredLayoutProps {
  children: ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return <StyledLayoutWrapper>{children}</StyledLayoutWrapper>;
};

export default CenteredLayout;
