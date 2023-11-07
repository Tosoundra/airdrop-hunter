import { memo, useEffect, useState } from 'react';
import { Header } from './blocks/Header/Header';
import { Main } from './blocks/Main/Main';
import { deviceWidth } from './assets/deviceWidth/deviceWidth';

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [state, setstate] = useState(false);
  function resizeHandle() {
    return window.innerWidth;
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandle);

    if (resizeHandle() >= deviceWidth.desktop) {
      setIsDesktop(true);
    } else if (resizeHandle() > deviceWidth.mobile && resizeHandle <= deviceWidth.tablet) {
      setIsTablet(true);
    } else if (resizeHandle() <= deviceWidth.mobile) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <Header isDesktop={isDesktop} isTable={isTablet} isMobile={isMobile} />
      <Main isDesktop={isDesktop} isTable={isTablet} isMobile={isMobile} />
      {/* <button
        onClick={() => {
          setstate((prev) => !prev);
        }}>
        click will change state
      </button>
      <First />
      <Second /> */}
    </>
  );
};

const First = () => {
  return (
    <>
      <h1>{First.name}</h1>
      <h1>{Math.random() * 9}</h1>
      <Third />
    </>
  );
};

const Second = () => {
  return (
    <>
      <h1>{Second.name}</h1>
      <h1>{Math.random() * 9}</h1>
      <Fifth />
    </>
  );
};

const Third = () => {
  return (
    <>
      <h1>{Third.name}</h1>
      <h1>{Math.random() * 9}</h1>
      <Fourth />
    </>
  );
};

const Fourth = () => {
  return (
    <>
      <h1>{Fourth.name}</h1>
      <h1>{Math.random() * 9}</h1>
    </>
  );
};

const Fifth = memo(() => {
  return (
    <>
      <h1>{Fifth.name}</h1>
      <h1>{Math.random() * 9}</h1>
    </>
  );
});
