import styles from './NavigationMenu.module.scss';
import imageData from '../../assets/imageData/imageData';
import { NavigateButton } from '../NavigateButton/NavigateButton';
import { useState } from 'react';

export const NavigationMenu = () => {
  const [cryptoWalletArray, setCryptoWalletArray] = useState(imageData);
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextPageButtonClickHandle() {
    const copiedArray = [...cryptoWalletArray];
    const firstItem = copiedArray.shift();
    const updatedArray = [...copiedArray, firstItem];
    setCryptoWalletArray(updatedArray);
  }

  function previousPageButtonClickHandle() {
    const copiedArray = [...cryptoWalletArray];
    const lastItem = copiedArray.pop();
    const updatedArray = [lastItem, ...copiedArray];
    setCryptoWalletArray(updatedArray);
  }

  return (
    <nav className={styles.navigation}>
      <NavigateButton degree={180} onClick={previousPageButtonClickHandle} />
      <ul className={styles.navigation__container}>
        {cryptoWalletArray.map((item, index) => {
          return (
            <li key={index} className={styles.navigation__element}>
              <img src={item} alt="crypto wallet" className={styles.navigation__image} />
            </li>
          );
        })}
      </ul>
      <NavigateButton degree={0} onClick={nextPageButtonClickHandle} />
    </nav>
  );
};
