import { useBurgerMenu } from '../../hooks';
import { Logo } from '../shared/Logo';
import { Nav } from './Nav';
import { ThemeSwitcher } from './ThemeSwitcher';
import { BurgerMenu } from './BurgerMenu';

import styles from './header.module.scss';

function Header() {
  const [isActive, handleClick] = useBurgerMenu();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Logo />
          <div className={styles.header__links}>
            <Nav />
            <ThemeSwitcher />
          </div>

          <button
            type="button"
            onClick={handleClick}
            className={styles.header__burger}
            aria-label="Open menu"
            aria-expanded="false"
          >
            <span></span>
          </button>
        </div>
        <BurgerMenu isActive={isActive} onClick={handleClick} />
      </div>
    </header>
  );
}

export default Header;
