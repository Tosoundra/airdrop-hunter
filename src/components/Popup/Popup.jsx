import { useEffect, useRef } from 'react';
import styles from './Popup.module.scss';

export const Popup = ({ isOpen, currentNews, setIsPopupOpen }) => {
  const first = useRef(null);

  function escapePressHandle(e) {
    if (e.key === 'Escape') {
      setIsPopupOpen(false);
    }
  }

  function outsideClickHandle(e) {
    if (e.target.hasAttribute('id')) {
      setIsPopupOpen(false);
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', escapePressHandle);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.removeEventListener('keydown', escapePressHandle);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
      onClick={outsideClickHandle}
      id="popup"
      className={`${styles.popup} ${isOpen && styles.popup_open}`}
      ref={first}>
      <div className={styles.popup__container}>
        <button
          onClick={() => {
            setIsPopupOpen(false);
          }}
          className={styles.popup__close}></button>

        <span className={styles.news__date}>{`Today • ${currentNews.date}`}</span>
        <h1 className={styles.popup__title}>{currentNews.title}</h1>
        <p className={styles.news__description}>{currentNews.description}</p>
      </div>
    </div>
  );
};
