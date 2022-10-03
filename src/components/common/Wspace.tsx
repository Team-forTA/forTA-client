import React from 'react';
import { styled } from '@mui/system';

interface WspaceProps {
  width: number;
}

const StyledDiv = styled('div')<WspaceProps>(({ width }) => ({
  display: 'inline-block',
  width: `${width}em`,
}));

const Wspace: React.FC<WspaceProps> = ({ width }) => {
  return <StyledDiv width={width} />;
};

export default Wspace;
