import { atom } from 'recoil';
import { ROBOTS_VARIANTS, APP_THEME_COLOR } from 'utils/constants';

export const appState = atom({
  key: 'appState',
  default: {
    greetings: 'It works!',
  },
});

export const appSeo = atom({
  key: 'appSeo',
  default: {
    title: 'React Blueprint App',
    description: 'This is a React Blueprint App built with React Hooks and Recoil.',
    keywords: '',
    robots: ROBOTS_VARIANTS.INDEX_FOLLOW,
    themeColor: APP_THEME_COLOR,
  },
});