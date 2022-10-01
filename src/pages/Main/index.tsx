import { FC } from 'react';
import BaseLayout from 'layouts/BaseLayout';
import { Link } from 'react-router-dom';
import './styles.css';

interface MainProps {
  [key: string]: any;
}

const Main: FC<MainProps> = () => {
  return (
    <BaseLayout title="React Clear Template">
      <p>React Clear Template</p>
    </BaseLayout>
  );
};

export default Main;
