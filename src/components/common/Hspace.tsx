import React from 'react';
import { styled } from '@mui/system';

interface HspaceProps {
  height: number;
}

const StyledDiv = styled('div')<HspaceProps>(({ height }) => ({
  height: `${height}em`,
}));

const Hspace: React.FC<HspaceProps> = ({ height }) => {
  return <StyledDiv height={height} />;
};

export default Hspace;
