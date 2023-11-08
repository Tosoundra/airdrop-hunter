import styles from './UserAccount.module.scss';
import metaMaskLogo from '../../assets/images/metamask_logo.png';
import gasPump from '../../assets/images/gas_pump.png';
import matic from '../../assets/images/matic.svg';
import { useState, useEffect, memo } from 'react';

const ID = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, '');

const doShorterID = (id) => {
  const regExp = /(.{5})(.+)(.{5})/gi;
  return id.replace(regExp, '$1...$3');
};

export const UserAccount = memo(() => {
  const [accountID, setAccountID] = useState('');

  useEffect(() => {
    setAccountID(ID);
  }, []);

  return (
    <div className={styles.account}>
      <div className={styles.account__container}>
        <div className={styles.account__matic}>
          <img src={matic} alt="matic" width={12} height={12} />
        </div>
        <div className={styles['account__wallet-summary']}>
          <span className={styles.account__balance}>850$</span>
          <p className={styles.account__id}>{doShorterID(accountID)}</p>
          <span className={styles.account__tooltip}>{accountID}</span>
          <img src={gasPump} alt="gas pump" />
          <span className={styles['account__gas-balance']}>0$</span>
          <div className={styles['wallet-container']}>
            <img className={styles['wallet-container__logo']} src={metaMaskLogo} alt="wallet" />
          </div>
        </div>
      </div>
    </div>
  );
});
