import { useCallback, useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import stylesButton from '../Button/Button.module.scss';
import styles from './Menu.module.scss';
import { NavigateButton } from '../NavigateButton/NavigateButton';

export const MenuMobile = ({}) => {
  const arrayOfButtons = ['Airdrops', 'Stats', 'News', 'Referrals', 'Nodes', 'Text'];
  const countOfVisibleElements = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleElements, setVisibleElements] = useState(
    arrayOfButtons.slice(currentIndex, countOfVisibleElements),
  );

  function previousButtonClickHandle() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      const newArray = arrayOfButtons.slice(
        currentIndex - 1,
        currentIndex - 1 + countOfVisibleElements,
      );
      setVisibleElements(newArray);
    }
  }

  function nextButtonClickHandle() {
    if (currentIndex < arrayOfButtons.length - countOfVisibleElements) {
      setCurrentIndex((prev) => prev + 1);
      const newArray = arrayOfButtons.slice(
        currentIndex + 1,
        currentIndex + 1 + countOfVisibleElements,
      );
      setVisibleElements(newArray);
    }
  }

  const [selectedButton, setSelectedButton] = useState('Airdrops');

  const isSelectedButton = (buttonName) => {
    return selectedButton === buttonName ? stylesButton.button_active : '';
  };

  useEffect(() => {
    isSelectedButton(selectedButton);
  }, []);

  return (
    <nav className={styles.menu}>
      <NavigateButton degree={-180} onClick={previousButtonClickHandle} />

      {visibleElements.map((item, index) => {
        return (
          <Button
            key={index}
            isSelectedButton={isSelectedButton}
            setSelectedButton={setSelectedButton}
            name={item}
          />
        );
      })}
      <NavigateButton
        onClick={nextButtonClickHandle}
        isDisabled={currentIndex === arrayOfButtons.length - countOfVisibleElements}
      />
    </nav>
  );
};
