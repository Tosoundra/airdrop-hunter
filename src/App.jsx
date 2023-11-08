import { memo, useEffect, useState } from 'react';
import { Header } from './blocks/Header/Header';
import { Main } from './blocks/Main/Main';
import { deviceWidth } from './assets/deviceWidth/deviceWidth';

export const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState({
    desktop: width >= 1024,
    tablet: width >= 768 && width < 1024,
    mobile: width < 768,
  });
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  function resizeHandle() {
    setWidth(window.innerWidth);
  }

  const useDeviceWidth = () => {
    return;
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandle);

    if (width >= deviceWidth.desktop) {
      setIsDesktop(true);
      setIsTablet(false);
      setIsMobile(false);
    } else if (width > deviceWidth.mobile && width <= deviceWidth.tablet) {
      setIsTablet(true);
    } else if (width <= deviceWidth.mobile) {
      setIsMobile(true);
      setIsDesktop(false);
    }

    () => {
      return window.removeEventListener('resize', resizeHandle);
    };
  }, [width]);

  return (
    <>
      <Header isDesktop={isDesktop} isTable={isTablet} isMobile={isMobile} />
      <Main isDesktop={isDesktop} isTable={isTablet} isMobile={isMobile} />
    </>
  );
};
