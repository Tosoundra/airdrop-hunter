import { cardData } from '../../assets/CardData/cardData';
import { Card } from './Card/Card';
import styles from './Cards.module.scss';

export const Cards = ({ id }) => {
  return (
    <section>
      <ul className={styles.cards}>
        {cardData.map((item, index) => {
          return <Card key={index} data={item} id={id[index]} />;
        })}
      </ul>
    </section>
  );
};
