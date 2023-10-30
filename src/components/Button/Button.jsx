import { memo } from 'react';
import style from './Button.module.scss';

export const Button = memo(({ isSelectedButton, setSelectedButton, name }) => {
  return (
    <button
      onClick={() => {
        setSelectedButton(name);
      }}
      className={`${style.button} ${isSelectedButton(name)}`}>
      {name}
    </button>
  );
});
