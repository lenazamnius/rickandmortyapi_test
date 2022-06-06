import { Box } from '@mui/material';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainRoutes } from './books';

const CharacterList = lazy(() => import('../pages/CharacterList'));
const Character = lazy(() => import('../pages/Character'));

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Box>Loading...</Box>}>
        <Routes>
          <Route index element={<Navigate to={MainRoutes.characters} />} />
          <Route path={MainRoutes.characters} element={<CharacterList />} />
          <Route path={MainRoutes.character} element={<Character />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RootRouter;
