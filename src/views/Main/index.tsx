import { FC } from 'react';
import BaseLayout from 'layouts/BaseLayout';
import './styles.css';

interface MainProps {
  [key: string]: any;
}

const Main: FC<MainProps> = () => {
  return (
    <BaseLayout title="React Blueprint 2022">
      <div className="preview-info">
        <img src="/icon-512x512.png" alt="React Blueprint" width="256px" className="title-image" />
        <h1>React Blueprint 2022</h1>
        <p>Dummy react App with initial settings</p>
      </div>
    </BaseLayout>
  );
};

export default Main;
