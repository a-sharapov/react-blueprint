import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Main from 'views/Main';

const App: FC = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
