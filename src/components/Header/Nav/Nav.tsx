import { NavItem } from './NavItem';

import styles from './nav.module.scss';

export interface INavItem {
  src: string;
  title: string;
}

const links: INavItem[] = [
  {
    src: '/',
    title: 'Home',
  },
  {
    src: 'category',
    title: 'Category',
  },
  {
    src: 'ingredients',
    title: 'Ingredients',
  },
];

interface NavProps {
  onClick?: () => void;
}

// Noop function if it doesn't have to do smth on navItem click (for burger)
const noop = () => {
  return;
};

function Nav({ onClick = noop }: NavProps) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {links.map((item) => (
          <NavItem
            key={item.title}
            {...item}
            className={styles.nav__item}
            activeClass={styles.active}
            onClick={onClick}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
