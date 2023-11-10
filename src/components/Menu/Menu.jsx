import { CheckDeviceComponent } from '../CheckDeviceComponent/CheckDeviceComponent';
import { MenuMobile } from './MenuMobile';
import { MenuDesktop } from './MenuDesktop';

const title = ['Airdrops', 'Stats', 'News', 'Referrals', 'Nodes', 'Text'];

export const Menu = ({}) => {
  return (
    <CheckDeviceComponent
      desktopComponent={<MenuDesktop title={title} />}
      mobileComponent={<MenuMobile title={title} />}
    />
  );
};
