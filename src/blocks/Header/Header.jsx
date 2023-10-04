import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__warn}>This project is beta. DYOR</div>
      <div>
        <img src="" alt="" />
        <div>
          <button className={styles.header__button}>Deposit</button>
          <a href="#">Connect Wallet</a>
          <div style={{ width: '40px', height: '42px' }}></div>
        </div>
      </div>
    </header>
  );
};
