import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className, value, onChange, type = 'text', placeholder, autofocus, ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart || 0);
  };

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      {placeholder && <span>{`${placeholder}>`}</span>}
      <div className={cls.caretWrapper}>
        <input
          className={cls.input}
          value={value}
          onChange={onChangeHandler}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          ref={ref}
          {...otherProps}
        />
        {isFocused && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
      </div>
    </div>
  );
});
