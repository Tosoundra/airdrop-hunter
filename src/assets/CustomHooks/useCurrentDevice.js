import { useEffect, useState } from 'react';

export const useCurrentDevice = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [device, setDevice] = useState({
    isDesktop: width >= 1024,
    isTablet: width >= 768 && width < 1024,
    isMobile: width < 768,
  });

  function resizeHandle() {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    setDevice({
      isDesktop: newWidth >= 1024,
      isTablet: newWidth >= 768 && width < 1024,
      isMobile: newWidth < 768,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', resizeHandle);
    () => {
      return window.removeEventListener('resize', resizeHandle);
    };
  }, [width]);

  return device;
};
