import styles from './NavigationMenu.module.scss';
import imageData from '../../assets/imageData/imageData';
import { NavigateButton } from '../NavigateButton/NavigateButton';
import { useEffect, useState } from 'react';

export const NavigationMenu = ({ id }) => {
  const [cryptoWalletArray, setCryptoWalletArray] = useState(imageData);
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextPageButtonClickHandle() {
    const copiedArray = [...cryptoWalletArray];
    const firstItem = copiedArray.shift();
    // console.log(firstItem.closest('a'));
    const updatedArray = [...copiedArray, firstItem];
    setCryptoWalletArray(updatedArray);
  }

  function previousPageButtonClickHandle(e) {
    const copiedArray = [...cryptoWalletArray];
    const lastItem = copiedArray.pop();
    const updatedArray = [lastItem, ...copiedArray];
    setCryptoWalletArray(updatedArray);
    console.log(e.target);
  }
  useEffect(() => {
    setCryptoWalletArray(
      cryptoWalletArray.map((item, index) => {
        return { img: item, id: id[index] };
      }),
    );
  }, []);

  return (
    <nav className={styles.navigation}>
      <NavigateButton degree={180} onClick={previousPageButtonClickHandle} />
      <ul className={styles.navigation__container}>
        {cryptoWalletArray.map((item, index) => {
          return (
            <li key={index} className={styles.navigation__element}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  const item = e.target.closest('a');
                  console.log(e.target.closest('a'));
                }}>
                <img src={item.img} alt="crypto wallet" className={styles.navigation__image} />
              </a>
            </li>
          );
        })}
      </ul>
      <NavigateButton degree={0} onClick={nextPageButtonClickHandle} />
    </nav>
  );
};
