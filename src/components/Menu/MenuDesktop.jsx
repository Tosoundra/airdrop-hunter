import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import stylesButton from '../Button/Button.module.scss';
import styles from './Menu.module.scss';

export const MenuDesktop = () => {
  const [selectedButton, setSelectedButton] = useState('Airdrops');

  const isSelectedButton = (buttonName) => {
    return selectedButton === buttonName ? stylesButton.button_active : '';
  };

  useEffect(() => {
    isSelectedButton(selectedButton);
  }, []);

  return (
    <nav className={styles.menu}>
      <Button
        isSelectedButton={isSelectedButton}
        setSelectedButton={setSelectedButton}
        name="Airdrops"
      />
      <Button
        isSelectedButton={isSelectedButton}
        setSelectedButton={setSelectedButton}
        name="Stats"
      />
      <Button
        isSelectedButton={isSelectedButton}
        setSelectedButton={setSelectedButton}
        name="News"
      />
      <Button
        isSelectedButton={isSelectedButton}
        setSelectedButton={setSelectedButton}
        name="Referrals"
      />
      <Button
        isSelectedButton={isSelectedButton}
        setSelectedButton={setSelectedButton}
        name="Nodes"
      />
      <Button
        isSelectedButton={isSelectedButton}
        setSelectedButton={setSelectedButton}
        name="Text"
      />
    </nav>
  );
};
