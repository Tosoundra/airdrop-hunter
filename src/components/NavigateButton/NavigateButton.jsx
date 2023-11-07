import styles from './NavigateButton.module.scss';
export const NavigateButton = ({ onClick, degree, isDisabled }) => {
  return (
    <>
      <button
        onClick={onClick}
        disabled={isDisabled}
        style={{ transform: `rotate(${degree}deg)` }}
        className={styles.button}></button>
    </>
  );
};
