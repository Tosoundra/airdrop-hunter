import styles from './Header.module.scss';
import logo from '../../assets/images/logo_AirDrop.svg';
import { memo, useState } from 'react';
import { UserAccount } from '../../components/UserAccount/UserAccount';
import { useCurrentDevice } from '../../assets/CustomHooks/useCurrentDevice';

export const Header = memo(({}) => {
  const [isShownWarn, setIsShownWarn] = useState(true);

  function closeWarnClickHandle() {
    setIsShownWarn(false);
  }
  const { isDesktop, isMobile, isTablet } = useCurrentDevice();

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
    </header>
  );
});
