import styles from './Popup.module.scss';
import { useClosePopup } from '../../assets/CustomHooks/useClosePopup';

export const Popup = ({ isOpen, currentNews, setIsPopupOpen }) => {
  const closePopupAction = useClosePopup(isOpen, setIsPopupOpen);
  return (
    <div
      onClick={closePopupAction}
      id="popup"
      className={`${styles.popup} ${isOpen && styles.popup_open}`}>
      <div className={`${styles.popup__container} ${isOpen && styles.popup__container_open}`}>
        <button
          onClick={() => {
            setIsPopupOpen(false);
          }}
          className={styles.popup__close}></button>

        <span className={styles.news__date}>{`Today • ${currentNews?.date}`}</span>
        <h1 className={styles.popup__title}>{currentNews?.title}</h1>
        <p className={styles.news__description}>{currentNews?.description}</p>
      </div>
    </div>
  );
};
