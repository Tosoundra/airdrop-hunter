import styles from './Header.module.scss';
import stylesButton from '../../components/Button/Button.module.scss';
import logo from '../../assets/images/logo_AirDrop.svg';
import { memo, useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { UserAccount } from '../../components/UserAccount/UserAccount';
import { Menu } from '../../components/Menu/Menu';

export const Header = memo(({ isDesktop, isTablet, isMobile, str }) => {
  const [selectedButton, setSelectedButton] = useState('Airdrops');
  const [isShownWarn, setIsShownWarn] = useState(true);

  function closeWarnClickHandle() {
    setIsShownWarn(false);
  }

  const isSelectedButton = (buttonName) => {
    return selectedButton === buttonName ? stylesButton.button_active : '';
  };

  useEffect(() => {
    isSelectedButton(selectedButton);
  }, []);
  return (
    <header className={styles.header}>
      {isShownWarn && (
        <div className={styles.header__warn}>
          <div style={{ margin: 'auto' }}>This project is beta. DYOR</div>
          <button
            onClick={closeWarnClickHandle}
            className={styles['header__close-button']}></button>
        </div>
      )}
      <div className={styles.header__container}>
        <img className={styles.header__logo} src={logo} alt="airdrop logo" />
        <button className={styles.header__button}>Deposit</button>
        {isDesktop && (
          <>
            <UserAccount />
            <button className={styles.header__options}>
              <div className={styles['header__options-button']}></div>
            </button>
          </>
        )}

        {isMobile && (
          <>
            <button className={styles.header__options}>
              <div className={styles['header__options-button']}></div>
            </button>
            <UserAccount />
          </>
        )}
      </div>
      <Menu isDesktop={isDesktop} str={str} />
      {/* {isDesktop && (
        <div className={styles.header__container}>
          <img className={styles.header__logo} src={logo} alt="airdrop logo" />
          <button className={styles.account__button}>Deposit</button>
          <UserAccount />
          <button className={styles.header__options}>
            <div className={styles['header__options-button']}></div>
          </button>
        </div>
      )} */}

      {/* {isMobile && (
        <div className={styles.header__container}>
          <img className={styles.header__logo} src={logo} alt="airdrop logo" />
          <button className={styles.header__options}>
            <div className={styles['header__options-button']}></div>
          </button>
          <UserAccount />
        </div>
      )} */}
    </header>
  );
});
