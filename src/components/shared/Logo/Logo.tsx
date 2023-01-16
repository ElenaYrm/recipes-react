import styles from './logo.module.scss';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <span className={styles.logo__text}>CookBook</span>
    </Link>
  );
}

export default Logo;
