import styles from './Header.module.scss';
import stylesButton from '../../components/Button/Button.module.scss';
import logo from '../../assets/images/logo_AirDrop.svg';
import { memo, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { UserAccount } from '../../components/UserAccount/UserAccount';

export const Header = memo(() => {
  const [selectedButton, setSelectedButton] = useState('');
  const [isShownWarn, setIsShownWarn] = useState(true);

  function closeWarnClickHandle() {
    setIsShownWarn(false);
  }

  function isSelectedButton(buttonName) {
    return selectedButton === buttonName ? stylesButton.button_active : '';
  }

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
        <UserAccount />
      </div>
      <nav className={styles['header__navigation-container']}>
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
    </header>
  );
});
