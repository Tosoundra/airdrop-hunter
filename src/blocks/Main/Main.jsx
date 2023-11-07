import { memo, useEffect, useId, useState } from 'react';
import { NavigationMenu } from '../../components/NavigationMenu/NavigationMenu';
import { News } from '../../components/News/News';
import style from './Main.module.scss';
import imageData from '../../assets/imageData/imageData';
import { Cards } from '../../components/Cards/Cards';
import { cardData } from '../../assets/CardData/cardData';

export const Main = ({ isDesktop }) => {
  const id = Array.from({ length: 11 }, useId);

  return (
    <main className={style.main}>
      <News isDesktop={isDesktop} />
      <NavigationMenu id={id} />
      <Cards id={id} />
    </main>
  );
};
