import { Logo } from '../shared/Logo';
import { Nav } from './Nav';

import styles from './header.module.scss';
import { ThemeSwitcher } from './ThemeSwitcher';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Logo />
          <Nav />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
