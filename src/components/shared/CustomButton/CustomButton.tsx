import styles from './customButton.module.scss';
import classNames from 'classnames';

interface CustomButtonProps {
  text: string;
  handleClick: () => void;
  buttonType?: 'white' | 'orange' | 'red';
  className?: string;
}

function CustomButton({ text, handleClick, buttonType = 'white', className }: CustomButtonProps) {
  const classes = classNames(styles.btn, { [styles[buttonType]]: true }, className);

  return (
    <button className={classes} onClick={handleClick}>
      {text}
    </button>
  );
}

export default CustomButton;
