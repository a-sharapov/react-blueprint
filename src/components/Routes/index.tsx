import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from 'pages/Main';
import NotFound from 'pages/NotFound';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
