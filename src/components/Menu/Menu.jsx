import styles from './Menu.module.scss';
import stylesButton from '../../components/Button/Button.module.scss';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { CheckDeviceComponent } from '../CheckDeviceComponent/CheckDeviceComponent';
import { MenuMobile } from './MenuMobile';
import { MenuDesktop } from './MenuDesktop';

export const Menu = ({ isDesktop, isMobile, str }) => {
  return (
    <CheckDeviceComponent
      isDesktop={isDesktop}
      desktopComponent={<MenuDesktop />}
      mobileComponent={<MenuMobile />}
    />
  );
};
