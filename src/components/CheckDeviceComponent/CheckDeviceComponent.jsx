export const CheckDeviceComponent = ({ isDesktop, desktopComponent, mobileComponent }) => {
  return isDesktop ? desktopComponent : mobileComponent;
};
