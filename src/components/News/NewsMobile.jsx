import { NavigateButton } from '../NavigateButton/NavigateButton';
import styles from './News.module.scss';

export const NewsMobile = ({
  previousPageButtonClickHandle,
  nextPageButtonClickHandle,
  isCollapsed,
  setIsCollapsed,
  toggleHideClickHandle,
  news,
  currentIndex,
  setIsPopupOpen,
}) => {
  return (
    <div className={`${styles.news__element} ${isCollapsed ? styles.news__element_collapse : ''}`}>
      <div
        onClick={() => {
          setIsCollapsed(false);
        }}
        className={styles['news__image-container']}>
        <img className={styles.news__image} src={news[currentIndex]?.img}></img>
      </div>
      {!isCollapsed && (
        <>
          {/* <div className={styles['news__image-container']}>
            <img className={styles.news__image} src={news[currentIndex]?.img}></img>
          </div> */}
          <div className={styles.news__information}>
            <span className={styles.news__date}>{`Today • ${news[currentIndex]?.date}`}</span>
            <h1 className={styles.news__title}>{news[currentIndex]?.title}</h1>
            <p className={styles.news__description}>{news[currentIndex]?.description}</p>
            <div className={styles.news__control}>
              <div className={styles['news__hide-container']}>
                <NavigateButton degree={-45} onClick={toggleHideClickHandle} />
                <a onClick={toggleHideClickHandle} style={{ cursor: 'pointer' }}>
                  Hide
                </a>
                <span style={{ color: '#F3F3F3' }}>&#10072;</span>
                <a
                  onClick={() => {
                    setIsPopupOpen(true);
                  }}
                  style={{ cursor: 'pointer' }}>
                  Read more
                </a>
              </div>
              <div className={styles['news__turn-page-button-container']}>
                <span>{`${currentIndex + 1}/${news.length}`}</span>
                {currentIndex > 0 ? (
                  <>
                    <NavigateButton onClick={previousPageButtonClickHandle} degree={-180} />
                  </>
                ) : (
                  ''
                )}
                {currentIndex < news.length - 1 ? (
                  <NavigateButton onClick={nextPageButtonClickHandle} />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
