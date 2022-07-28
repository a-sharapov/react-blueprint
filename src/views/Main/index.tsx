import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { appState } from 'atoms';
import BaseLayout from 'layouts/BaseLayout';

interface MainProps {
  [key: string]: any;
}

const Main: FC<MainProps> = () => {
  const { greetings } = useRecoilValue(appState);

  return <BaseLayout>{greetings}</BaseLayout>;
};

export default Main;
