import { FC, lazy } from 'react';
import LoginForm, { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  // TODO: удалить
  // @ts-ignore
  // eslint-disable-next-line no-promise-executor-return
  () => new Promise((resolve) => setTimeout(() => resolve(import('./LoginForm')), 1000)),
);
