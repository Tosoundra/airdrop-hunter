import styles from './Header.module.scss';
import logo from '../../assets/images/Frame.png';
import { useState } from 'react';

export const Header = () => {
  const [drops, setDrops] = useState(false);

  function handleClick() {
    setDrops(!drops);
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__warn}>
        <div style={{ margin: 'auto' }}>This project is beta. DYOR</div>
        <button>close</button>
      </div>
      <div className={styles.header__container}>
        <img src={logo} alt="" />
        <div className={styles.header__walletContainer}>
          <button className={styles.header__button}>Deposit</button>
          <a href="#">Connect Wallet</a>
          <div className={styles.header__emptySpace}></div>
        </div>
      </div>
      <nav className={styles.header__navContainer}>
        <button
          onClick={handleClick}
          className={`${styles.header__navElement} ${drops && styles.button_active}`}
        >
          Airdrops
        </button>
        <button className={styles.header__navElement}>Stats</button>
        <button className={styles.header__navElement}>News</button>
        <button className={styles.header__navElement}>Referals</button>
      </nav>
    </header>
  );
};
