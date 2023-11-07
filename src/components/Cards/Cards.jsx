import { cardData } from '../../assets/CardData/cardData';
import styles from './Cards.module.scss';

let cost = 150;
export const Cards = ({ id }) => {
  return (
    <section>
      <ul className={styles.cards}>
        {cardData.map((item, index) => {
          return (
            <li className={styles.card} key={index} id={id[index]}>
              <div className={styles['card__title-container']}>
                <img src={item.img} alt="logo" className={styles.card__logo} loading="lazy" />
                <span className={styles.card__title}>{item.title}</span>
              </div>
              <p className={styles.card__description}>{item.description}</p>
              <a className={styles['card__read-more']}>Read more</a>
              <div className={styles.income}>
                <span className={styles.income__title}>On artificial AI:</span>
                <span>expected airdrop</span>
                <span>probability</span>
                <span>{item.income.value}</span>
                <span>{item.income.probability}</span>
              </div>
              <div className={styles.tariff}>
                <div style={{ color: '#636775' }}>
                  <span style={{ fontSize: '11px', marginRight: '140px' }}>Tariff</span>
                  <span style={{ gridColumn: '2 / span 2', fontSize: '12px' }}>Cost, $</span>
                </div>
                <div className={styles.tariff__information}>
                  <span className={styles.tariff__account}>5 accounts</span>
                  <span className={styles.tariff__cost}>{cost}</span>
                  <a className={styles.tariff__detail}>Detail</a>
                </div>
                <div className={styles.tariff__information}>
                  <span className={styles.tariff__account}>10 accounts</span>
                  <span className={styles.tariff__cost}>{cost + 150}</span>
                  <a className={styles.tariff__detail}>Detail</a>
                </div>
                <div className={styles.tariff__information}>
                  <span className={styles.tariff__account}>15 accounts</span>
                  <span className={styles.tariff__cost}>{(cost += 150)}</span>
                  <a className={styles.tariff__detail}>Detail</a>
                </div>
                <div className={styles.tariff__information}>
                  <span className={styles.tariff__account}>20 accounts</span>
                  <span className={styles.tariff__cost}>{cost}</span>
                  <a className={styles.tariff__detail}>Detail</a>
                </div>
                <div className={styles.tariff__information}>
                  <span className={styles.tariff__account}>25 accounts</span>
                  <span className={styles.tariff__cost}>{cost}</span>
                  <a className={styles.tariff__detail}>Detail</a>
                </div>
                <div className={styles.tariff__information}>
                  <span className={styles.tariff__account}>30 accounts</span>
                  <span className={styles.tariff__cost}>{cost}</span>
                  <a className={styles.tariff__detail}>Detail</a>
                </div>
              </div>
              <button className={styles.card__button}>Buy</button>
              <p style={{ fontSize: '12px', textAlign: 'center' }}>
                Choose a suitable tariff and click the button
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
