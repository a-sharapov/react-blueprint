import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { AppRoutes } from 'components/Routes';

const App: FC = () => {
  return (
    <RecoilRoot>
      <AppRoutes />
    </RecoilRoot>
  );
};

export default App;
