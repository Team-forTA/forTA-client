import React, { ReactNode } from 'react';
import { styled } from '@mui/system';

const StyledLayoutWrapper = styled('div')``;

interface FullScreenLayoutProps {
  children: ReactNode;
}

const FullScreenLayout: React.FC<FullScreenLayoutProps> = ({ children }) => {
  return <StyledLayoutWrapper>{children}</StyledLayoutWrapper>;
};

export default FullScreenLayout;
