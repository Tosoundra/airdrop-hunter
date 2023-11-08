import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './Menu.module.scss';
import { NavigateButton } from '../NavigateButton/NavigateButton';

const countOfVisibleElements = 3;

export const MenuMobile = ({ title }) => {
  const [selectedButton, setSelectedButton] = useState('Airdrops');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleElements, setVisibleElements] = useState(
    title.slice(currentIndex, countOfVisibleElements),
  );

  function previousButtonClickHandle() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      const newArray = title.slice(currentIndex - 1, currentIndex - 1 + countOfVisibleElements);
      setVisibleElements(newArray);
    }
  }

  function nextButtonClickHandle() {
    if (currentIndex < title.length - countOfVisibleElements) {
      setCurrentIndex((prev) => prev + 1);
      const newArray = title.slice(currentIndex + 1, currentIndex + 1 + countOfVisibleElements);
      setVisibleElements(newArray);
    }
  }

  return (
    <nav className={styles.menu}>
      <NavigateButton degree={-180} onClick={previousButtonClickHandle} />

      {visibleElements.map((item, index) => {
        return (
          <Button
            key={index}
            selectedButton={selectedButton}
            setSelectedButton={setSelectedButton}
            name={item}
          />
        );
      })}
      <NavigateButton
        onClick={nextButtonClickHandle}
        isDisabled={currentIndex === title.length - countOfVisibleElements}
      />
    </nav>
  );
};
