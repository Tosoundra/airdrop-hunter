import styles from './NavigateButton.module.scss';
export const NavigateButton = ({ onClick, degree }) => {
  return (
    <button
      onClick={onClick}
      style={{ transform: `rotate(${degree}deg)` }}
      className={styles.button}></button>
  );
};
