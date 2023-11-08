import { useState } from 'react';
import { Button } from '../Button/Button';

import styles from './Menu.module.scss';

export const MenuDesktop = ({ title }) => {
  const [selectedButton, setSelectedButton] = useState('Airdrops');

  return (
    <nav className={styles.menu}>
      {title.map((item, index) => {
        return (
          <Button
            key={index}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            name={item}
          />
        );
      })}
    </nav>
  );
};
