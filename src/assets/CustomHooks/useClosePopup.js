import { useEffect } from 'react';

export const useClosePopup = (isOpen, setIsPopupOpen) => {
  function escapePressHandle(e) {
    if (e.key === 'Escape') {
      setIsPopupOpen(false);
    }
  }

  function outsideClickHandle(e) {
    if (e.target.hasAttribute('id')) {
      setIsPopupOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.addEventListener('keydown', escapePressHandle);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.removeEventListener('keydown', escapePressHandle);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return outsideClickHandle;
};
