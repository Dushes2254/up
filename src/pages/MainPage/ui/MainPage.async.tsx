import { lazy } from 'react';

export const MainPageAsync = lazy(
  // TODO: удалить
  // @ts-ignore
  () => new Promise(resolve => setTimeout(() => resolve(import('./MainPage')), 1000))
);
