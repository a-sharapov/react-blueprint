import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { appSeo } from 'atoms';
import { Helmet } from 'react-helmet';
import './styles.css';

interface BaseLayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  themeColor?: string;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children, ...props }) => {
  const seo = useRecoilValue(appSeo);
  const helmetProps = {
    ...seo,
    ...props,
  };

  return (
    <>
      <Helmet>
        <title>{helmetProps.title}</title>
        <meta name="description" content={helmetProps.description} />
        <meta name="keywords" content={helmetProps.keywords} />
        <meta name="msapplication-navbutton-color" content={helmetProps.themeColor} />
        <meta name="theme-color" content={helmetProps.themeColor} />
        <meta
          name="robots"
          content={`${helmetProps.robots}, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
        />
      </Helmet>
      {children}
    </>
  );
};

export default BaseLayout;
