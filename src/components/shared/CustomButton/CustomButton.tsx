import { memo, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './customButton.module.scss';

interface CustomButtonProps {
  handleClick: () => void;
  text?: string;
  buttonType?: 'white' | 'purple' | 'orange';
  className?: string;
  icon?: ReactNode;
}

function CustomButton({ text, handleClick, buttonType = 'purple', className, icon }: CustomButtonProps) {
  const classes = classNames(styles.btn, { [styles[buttonType]]: true }, className);

  return (
    <button className={classes} onClick={handleClick}>
      {icon || null}
      {text || null}
    </button>
  );
}

export default memo(CustomButton);
