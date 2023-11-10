import style from './Main.module.scss';
import { useId } from 'react';
import { NavigationMenu } from '../../components/NavigationMenu/NavigationMenu';
import { News } from '../../components/News/News';
import { Cards } from '../../components/Cards/Cards';
import { Menu } from '../../components/Menu/Menu';
import { useCurrentDevice } from '../../assets/CustomHooks/useCurrentDevice';

export const Main = ({}) => {
  const id = Array.from({ length: 11 }, useId);
  const { isDesktop, isMobile } = useCurrentDevice();

  return (
    <main className={style.main}>
      {isDesktop && (
        <>
          <Menu />
          <News />
          <NavigationMenu id={id} />
        </>
      )}

      {isMobile && (
        <>
          <div className={style.main__sticky}>
            <Menu />
            <NavigationMenu id={id} />
          </div>
          <News />
        </>
      )}

      <Cards id={id} />
    </main>
  );
};
