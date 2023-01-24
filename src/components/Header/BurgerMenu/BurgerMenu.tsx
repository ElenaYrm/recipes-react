import classNames from 'classnames';
import Icon from '../../shared/Icon/Icon';
import { Nav } from '../Nav';
import { ThemeSwitcher } from '../ThemeSwitcher';
import { IconId } from '../../../types/enums';

import styles from './burgerMenu.module.scss';

interface BurgerMenuProps {
  isActive: boolean;
  onClick: () => void;
}

function BurgerMenu({ isActive, onClick }: BurgerMenuProps) {
  const className = classNames(styles.burger, isActive ? styles.active : '');

  return (
    <div className={className}>
      <button
        type="button"
        onClick={onClick}
        className={styles.burger__btn}
        aria-label="Close menu"
        aria-expanded="true"
      >
        <Icon id={IconId.close} className={styles.burger__icon} />
      </button>

      <Nav onClick={onClick} />
      <ThemeSwitcher />
    </div>
  );
}

export default BurgerMenu;
