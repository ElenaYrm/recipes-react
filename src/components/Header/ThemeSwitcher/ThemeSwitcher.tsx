import { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../../context/ThemeContext';
import { Icon } from '../../shared/Icon';
import { IconId, Theme } from '../../../types/enums';

import styles from './themeSwitcher.module.scss';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const position: string = theme === Theme.Light ? 'left' : 'right';

  return (
    <button
      className={classNames(styles.wrapper, { [styles[`wrapper__${position}`]]: true })}
      type="button"
      onClick={toggleTheme}
    >
      <Icon id={IconId.sun} className={styles.icon} />

      <Icon id={IconId.moon} className={styles.icon} />
    </button>
  );
}

export default ThemeSwitcher;
