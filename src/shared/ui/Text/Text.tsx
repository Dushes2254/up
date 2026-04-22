import { FC } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = (props) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY,
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
  };

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      <div className={cls.title}>{title}</div>
      <div className={cls.text}>{text}</div>
    </div>
  );
};
