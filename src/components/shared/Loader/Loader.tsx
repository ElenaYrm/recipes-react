import styles from './loader.module.scss';

function Loader() {
  return (
    <div className={styles.loader}>
      <span className={styles.loader__circle}></span>
      <span className={styles.loader__circle}></span>
      <span className={styles.loader__circle}></span>
      <span className={styles.loader__circle}></span>
      <span className={styles.loader__circle}></span>
      <span className={styles.loader__circle}></span>
      <span className={styles.loader__circle}></span>
      <span className={styles.loader__circle}></span>
    </div>
  );
}

export default Loader;
