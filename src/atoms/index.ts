import { atom } from 'recoil';
import { ROBOTS_VARIANTS, SEO_DEFAULTS } from 'utils/constants';

export const appState = atom({
  key: 'appState',
  default: {
    greetings: 'It works!',
  },
});

export const appSeo = atom({
  key: 'appSeo',
  default: {
    robots: ROBOTS_VARIANTS.INDEX_FOLLOW,
    title: SEO_DEFAULTS.TITLE,
    description: SEO_DEFAULTS.DESCRIPTION,
    keywords: SEO_DEFAULTS.KEYWORDS,
    themeColor: SEO_DEFAULTS.THEME_COLOR,
  },
});
