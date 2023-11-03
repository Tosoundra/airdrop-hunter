import { memo } from 'react';
import { NavigationMenu } from '../../components/NavigationMenu/NavigationMenu';
import { News } from '../../components/News/News';
import style from './Main.module.scss';
import imageData from '../../assets/imageData/imageData';
import { Cards } from '../../components/Cards/Cards';

export const Main = memo(() => {
  return (
    <main className={style.main}>
      <News />
      <NavigationMenu />
      <Cards />
    </main>
  );
});
