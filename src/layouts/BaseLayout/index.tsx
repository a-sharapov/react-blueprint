import { SEO_DEFAULTS, ROBOTS_VARIANTS } from 'assets/constants';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import './styles.css';

interface BaseLayoutProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  themeColor?: string;
  robots?: string;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children, ...props }) => {
  const helmetProps = {
    ...props,
  };

  return (
    <>
      <Helmet>
        <title>{helmetProps.title ?? SEO_DEFAULTS.TITLE}</title>
        <meta name="description" content={helmetProps.description ?? SEO_DEFAULTS.DESCRIPTION} />
        <meta name="keywords" content={helmetProps.keywords ?? SEO_DEFAULTS.KEYWORDS} />
        <meta
          name="msapplication-navbutton-color"
          content={helmetProps.themeColor ?? SEO_DEFAULTS.THEME_COLOR}
        />
        <meta name="theme-color" content={helmetProps.themeColor ?? SEO_DEFAULTS.THEME_COLOR} />
        <meta
          name="robots"
          content={`${
            helmetProps.robots ?? ROBOTS_VARIANTS.INDEX_FOLLOW
          }, max-snippet:-1, max-image-preview:large, max-video-preview:-1`}
        />
      </Helmet>
      {children}
    </>
  );
};

export default BaseLayout;
