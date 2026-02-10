import { ThemeProvider, Theme } from 'app/providers/ThemeProvider';
import { ComponentType } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

export const ThemeDecorator = (theme: Theme) => (Story: ComponentType) => (
  <div className={classNames('app', {}, [theme])}>
    <Story />
  </div>
);
