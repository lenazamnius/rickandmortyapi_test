import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

interface Props {
  isFetching: boolean;
}

const Loader: FC<Props> = ({ isFetching }) => {
  return (
    <Box
      style={{
        position: 'absolute',
        top: '149px',
        left: 0,
        display: isFetching ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '65vh',
        background: 'rgba(25, 118, 210, .08)',
        zIndex: 10,
      }}>
      <CircularProgress style={{ zIndex: 6 }} thickness={4} />
    </Box>
  );
};
export default Loader;
