import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './customButton.module.scss';

interface CustomButtonProps {
  text: string;
  handleClick: () => void;
  buttonType?: 'white' | 'orange' | 'red';
  className?: string;
  icon?: ReactNode;
}

function CustomButton({
  text,
  handleClick,
  buttonType = 'white',
  className,
  icon,
}: CustomButtonProps) {
  const classes = classNames(styles.btn, { [styles[buttonType]]: true }, className);

  return (
    <button className={classes} onClick={handleClick}>
      {icon || null}
      {text}
    </button>
  );
}

export default CustomButton;
