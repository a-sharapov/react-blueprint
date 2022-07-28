import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from 'views/Main';
import NotFound from 'views/NotFound';

const App: FC = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
