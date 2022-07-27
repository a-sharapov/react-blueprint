import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { appState } from 'atoms';

interface MainProps {
  [key: string]: any;
}

const Main: FC<MainProps> = () => {
  const { greetings } = useRecoilValue(appState);

  return <>{greetings}</>;
};

export default Main;
