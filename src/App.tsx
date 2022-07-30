import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Demo from 'views/Demo';
import Main from 'views/Main';
import NotFound from 'views/NotFound';

const App: FC = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
