import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Hello!</h2>
      <p className={styles.text}>
        This is simole component with styles module css.
      </p>
    </div>
  );
};

export default Card;
