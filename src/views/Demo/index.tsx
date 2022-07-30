import BaseLayout from 'layouts/BaseLayout';
import { FC } from 'react';
import './styles.css';

const Demo: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <BaseLayout title="Demo Content">
      <article id="demo-content">
        <h1>Demo content</h1>
      </article>
      <footer>&copy; {currentYear}</footer>
    </BaseLayout>
  );
};

export default Demo;
