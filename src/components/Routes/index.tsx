import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Demo from 'views/Demo';
import Main from 'views/Main';
import NotFound from 'views/NotFound';

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
