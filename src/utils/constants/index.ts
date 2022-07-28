import { IConstant } from 'interfaces';

export const ROBOTS_VARIANTS: IConstant = {
  INDEX_FOLLOW: 'index, follow',
  INDEX_NOFOLLOW: 'index, nofollow',
  NOINDEX_FOLLOW: 'noindex, follow',
  NOINDEX_NOFOLLOW: 'noindex, nofollow',
};

export const SEO_DEFAULTS: IConstant = {
  TITLE: 'React Blueprint App',
  THEME_COLOR: '#111',
  DESCRIPTION: 'This is a React Blueprint App built with React Hooks and Recoil.',
  KEYWORDS: '',
};
