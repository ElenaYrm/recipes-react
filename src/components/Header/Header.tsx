import { Logo } from '../shared/Logo';

import styles from './header.module.scss';
import { Nav } from './Nav';

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
