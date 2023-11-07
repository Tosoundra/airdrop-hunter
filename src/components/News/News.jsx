import { useState, useEffect } from 'react';
import styles from './News.module.scss';
import { NavigateButton } from '../NavigateButton/NavigateButton';
import { newsData } from '../../assets/newsData/newsData';
import { createPortal } from 'react-dom';
import { Popup } from '../Popup/Popup';
import { CheckDeviceComponent } from '../CheckDeviceComponent/CheckDeviceComponent';
import { NewsDesktop } from './NewsDesktop';
import { NewsMobile } from './NewsMobile';

export const News = ({ isDesktop }) => {
  const [news, setNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function toggleHideClickHandle() {
    setIsCollapsed((prev) => !prev);
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
      <CheckDeviceComponent
        isDesktop={isDesktop}
        desktopComponent={
          <NewsDesktop
            previousPageButtonClickHandle={previousPageButtonClickHandle}
            nextPageButtonClickHandle={nextPageButtonClickHandle}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            toggleHideClickHandle={toggleHideClickHandle}
            news={news}
            currentIndex={currentIndex}
            setIsPopupOpen={setIsPopupOpen}
          />
        }
        mobileComponent={
          <NewsMobile
            previousPageButtonClickHandle={previousPageButtonClickHandle}
            nextPageButtonClickHandle={nextPageButtonClickHandle}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            toggleHideClickHandle={toggleHideClickHandle}
            news={news}
            currentIndex={currentIndex}
            setIsPopupOpen={setIsPopupOpen}
          />
        }
      />
      {/* {isPopupOpen &&
        createPortal(
          <Popup
            isOpen={isPopupOpen}
            setIsPopupOpen={setIsPopupOpen}
            currentNews={news[currentIndex]}
          />,
          document.body,
        )} */}

      <Popup
        isOpen={isPopupOpen}
        setIsPopupOpen={setIsPopupOpen}
        currentNews={news[currentIndex]}
      />
    </section>
  );
};
