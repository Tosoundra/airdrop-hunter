import { useState, useEffect } from 'react';
import styles from './News.module.scss';
import millionWalletsImg from '../../assets/images/million_wallets.png';
import { NavigateButton } from '../NavigateButton/NavigateButton';
import { newsData } from '../../assets/newsData/newsData';

export const News = () => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const createDate = () => {
    return `${new Date().getHours()}: ${new Date().getMinutes()}`;
  };

  function toggleHideClickHandle() {
    setIsCollapsed((prev) => !prev);
    console.log(toggleHideClickHandle.name);
  }

  function nextPageButtonClickHandle() {
    if (currentIndex < news.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function previousPageButtonClickHandle() {
    if (currentIndex >= 1) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  useEffect(() => {
    setNews(newsData.data);
    // isCollapsed ? setButtonHideText('Show') : setButtonHideText('Hide');
  }, [isCollapsed]);
  return (
    <section className={`${styles.news} ${isCollapsed ? styles.news_collapse : ''}`}>
      <div
        className={`${styles.news__element} ${isCollapsed ? styles.news__element_collapse : ''}`}>
        {isCollapsed ? (
          <div
            onClick={() => {
              setIsCollapsed(false);
            }}
            className={styles.news__information_collapse}>
            <div className={styles.news_control_collapse}>
              <div className={styles['news__hide-container']}>
                <NavigateButton degree={45} onClick={toggleHideClickHandle} />
                <a onClick={toggleHideClickHandle}>Show</a>
              </div>
              <span style={{ color: '#F3F3F3' }}>&#10072;</span>
              <h1 className={styles.news__title_collapse}>AirdropHunter&#8217;s NEWS</h1>
            </div>
            <p className={styles.news__description_collapse}>
              {news[currentIndex] && news[currentIndex].description}
            </p>
          </div>
        ) : (
          <>
            <div className={styles.news__information}>
              <span className={styles.news__date}>{`Today • ${createDate()}`}</span>
              <h1 className={styles.news__title}>{news[currentIndex]?.title}</h1>
              <p className={styles.news__description}>
                {news[currentIndex] && news[currentIndex].description}
              </p>
              <div className={styles.news__control}>
                <div className={styles['news__hide-container']}>
                  <NavigateButton degree={-45} onClick={toggleHideClickHandle} />
                  <a onClick={toggleHideClickHandle} style={{ cursor: 'pointer' }}>
                    Hide
                  </a>
                  <span style={{ color: '#F3F3F3' }}>&#10072;</span>
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
          </>
        )}
      </div>
    </section>
  );
};
