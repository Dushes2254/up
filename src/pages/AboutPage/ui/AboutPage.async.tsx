import { lazy } from 'react';

export const AboutPageAsync = lazy(
  // TODO: удалить
  // @ts-ignore
  // eslint-disable-next-line no-promise-executor-return
  () => new Promise((resolve) => setTimeout(() => resolve(import('./AboutPage')), 1000)),
);
