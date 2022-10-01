import { FC } from 'react';
import BaseLayout from 'layouts/BaseLayout';
import { Link } from 'react-router-dom';
import './styles.css';

const NotFound: FC = () => {
  return (
    <BaseLayout title="Page not Found">
      <section id="error-page">
        <h1 className="error-page-header">Ooops! 404</h1>
        <p>Seems like the page you are looking for does not exist.</p>
        <p>&nbsp;</p>
        <h5>But you are always might:</h5>
        <p>
          <Link to="/">Return to Homepage</Link>
        </p>
      </section>
    </BaseLayout>
  );
};

export default NotFound;
