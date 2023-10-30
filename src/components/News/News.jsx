import { useState, useEffect } from 'react';
import styles from './News.module.scss';
import millionWalletsImg from '../../assets/images/million_wallets.png';
import { NavigateButton } from '../NavigateButton/NavigateButton';
import { newsData } from '../../assets/newsData/newsData';

export const News = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHide, setIsHide] = useState(false);
  const [buttonHideText, setButtonHideText] = useState('show');

  const createDate = () => {
    return `${new Date().getHours()}: ${new Date().getMinutes()}`;
  };

  function toggleHideClickHandle() {
    setIsHide((prev) => !prev);
  }

  function nextPageButtonClickHandle() {
    if (currentIndex < news.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsNextButtonDisabled(false);
    } else {
      setIsNextButtonDisabled(true);
    }
  }

  function previousPageButtonClickHandle() {
    if (currentIndex >= 1) {
      setCurrentIndex((prev) => prev - 1);
      setIsPreviousButtonDisabled(false);
    } else {
      setIsPreviousButtonDisabled(true);
    }
  }

  useEffect(() => {
    setNews(newsData.data);
  }, []);
  if (isHide) {
    return (
      <section className={styles.news}>
        <div className={styles.news__element}>
          <div className={styles.news__information}>
            <span className={styles.news__date}>{`Today • ${createDate()}`}</span>
            <h1 className={styles.news__title}>{news[currentIndex]?.title}</h1>
            <p className={styles.news__description}>
              {news[currentIndex] && news[currentIndex].description}
            </p>
            <div className={styles.news__control}>
              <div className={styles['news__hide-container']}>
                <NavigateButton degree={-45} onClick={toggleHideClickHandle} />
                <a>{buttonHideText}</a>
                <span style={{ color: '#F3F3F3' }}>|</span>
                <a>Read more</a>
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
          <div className={styles['news__image-container']}>
            <img
              className={styles.news__image}
              src={news[currentIndex] && news[currentIndex].img}></img>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className={styles.news}>
        <div className={`${styles.news__element} ${styles['news__element-hidden']}`}>
          <NavigateButton degree={45} onClick={toggleHideClickHandle} />
          <div className={styles.news__information}>
            <span className={styles.news__date}>{`Today • ${createDate()}`}</span>
            <h1 className={styles.news__title}>{news[currentIndex]?.title}</h1>
            <p className={styles.news__description}>
              {news[currentIndex] && news[currentIndex].description}
            </p>
            <div className={styles.news__control}>
              <div className={styles['news__hide-container']}>
                <a>{buttonHideText}</a>
                <span style={{ color: '#F3F3F3' }}>|</span>
                <a>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};
