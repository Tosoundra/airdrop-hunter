export const Popup = () => {
  return (
    <div>
      <div>
        <span className={styles.news__date}>{`Today • ${createDate()}`}</span>
        <h1 className={styles.news__title}>{news[currentIndex]?.title}</h1>
        <p className={styles.news__description}>
          {news[currentIndex] && news[currentIndex].description}
        </p>
      </div>
    </div>
  );
};
