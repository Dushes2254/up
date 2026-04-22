import { ThemeProvider, Theme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div id="app" className={classNames('app', {}, [theme])}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
