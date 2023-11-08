import { memo } from 'react';
import style from './Button.module.scss';

export const Button = memo(({ selectedButton, setSelectedButton, name }) => {
  const isSelectedButton = (buttonName) => {
    return selectedButton === buttonName ? style.button_active : '';
  };
  
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
