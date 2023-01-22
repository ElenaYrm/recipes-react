import { Logo } from '../shared/Logo';
import { Nav } from './Nav';

import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
