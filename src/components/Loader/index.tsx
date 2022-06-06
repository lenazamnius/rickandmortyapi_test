import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

interface Props {
  isFetching: boolean;
}

const Loader: FC<Props> = ({ isFetching }) => {
  return (
    <Box
      style={{
        display: isFetching ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        background: 'rgba(25, 118, 210, .15)',
        position: 'absolute',
        top: '73px',
        left: 0,
        zIndex: 10,
      }}>
      <CircularProgress style={{ zIndex: 6 }} thickness={4} />
    </Box>
  );
};
export default Loader;
