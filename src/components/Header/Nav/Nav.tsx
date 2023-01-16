import { NavLink } from 'react-router-dom';

import styles from './nav.module.scss';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink to="category" className={({ isActive }) => (isActive ? styles.active : '')}>
            Category
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="ingredients" className={({ isActive }) => (isActive ? styles.active : '')}>
            Ingredients
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
