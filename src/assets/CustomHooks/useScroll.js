import { useEffect, useState } from 'react';

export const useScroll = (dimension) => {
  const [state, setState] = useState(0);

  const resize = () => {
    const heightOffset = window.scrollY;
    setState(heightOffset > dimension);
  };

  useEffect(() => {
    window.addEventListener('scroll', resize);
    return () => {
      window.removeEventListener('scroll', resize);
    };
  }, []);
  return state;
};
