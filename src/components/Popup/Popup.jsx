import { useEffect } from 'react';
import styles from './Popup.module.scss';

export const Popup = ({ isOpen, currentNews, setIsPopupOpen }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`${styles.popup} ${isOpen && styles.popup_open}`}>
      <div className={styles.popup__container}>
        {/* <div style={{ marginLeft: 'auto' }}> */}
          <button
            onClick={() => {
              setIsPopupOpen(false);
            }}
            className={styles.popup__close}></button>
        {/* </div> */}

        <span className={styles.news__date}>{`Today • ${currentNews.date}`}</span>
        <h1 className={styles.popup__title}>{currentNews.title}</h1>
        <p className={styles.news__description}>{currentNews.description}</p>
      </div>
    </div>
  );
};
