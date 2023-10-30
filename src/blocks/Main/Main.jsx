import { memo } from 'react';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { News } from '../../components/News/News';
import style from './Main.module.scss';

export const Main = memo(() => {
  return (
    <main className={style.main}>
      <News />
      <NavigationBar />
    </main>
  );
});
