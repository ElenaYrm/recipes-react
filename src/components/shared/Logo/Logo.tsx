import { Link } from 'react-router-dom';
import { Icon } from '../Icon';
import { IconId } from '../../../types/enums';

import styles from './logo.module.scss';

function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <Icon id={IconId.logo} className={styles.logo_icon} />
    </Link>
  );
}

export default Logo;
