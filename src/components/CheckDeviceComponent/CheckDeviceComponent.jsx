import { useCurrentDevice } from '../../assets/CustomHooks/useCurrentDevice';

export const CheckDeviceComponent = ({ desktopComponent, mobileComponent }) => {
  const { isDesktop, isMobile, isTablet } = useCurrentDevice();

  return (isDesktop && desktopComponent) || (isMobile && mobileComponent);
};
