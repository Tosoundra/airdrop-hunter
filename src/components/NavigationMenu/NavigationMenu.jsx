import styles from './NavigationMenu.module.scss';
import imageData from '../../assets/imageData/imageData';
import { NavigateButton } from '../NavigateButton/NavigateButton';
import { useEffect, useState } from 'react';

export const NavigationMenu = ({ id }) => {
  const [cryptoWalletArray, setCryptoWalletArray] = useState(imageData);

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
  
  useEffect(() => {
    setCryptoWalletArray(
      cryptoWalletArray.map((item, index) => {
        return { img: item, id: id[index] };
      }),
    );
  }, []);

  return (
    <nav className={`${styles.navigation} `}>
      <NavigateButton degree={180} onClick={previousPageButtonClickHandle} />
      <ul className={styles.navigation__container}>
        {cryptoWalletArray.map((item, index) => {
          return (
            <li key={index} className={styles.navigation__element}>
              <a href={`#${item.id}`}>
                <img
                  src={item.img}
                  alt="crypto wallet"
                  className={styles.navigation__image}
                  loading="lazy"
                />
              </a>
            </li>
          );
        })}
      </ul>
      <NavigateButton degree={0} onClick={nextPageButtonClickHandle} />
    </nav>
  );
};
