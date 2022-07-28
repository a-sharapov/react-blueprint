import { FC } from 'react';
import BaseLayout from 'layouts/BaseLayout';
import './styles.css';

const NotFound: FC = () => {
  return (
    <BaseLayout title="Not Found">
      <h1>404</h1>
      <p>Page not found</p>
    </BaseLayout>
  );
};

export default NotFound;
