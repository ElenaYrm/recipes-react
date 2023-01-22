import classNames from 'classnames';

import styles from './message.module.scss';

interface MessageProps {
  message: string;
  typeMessage: 'error' | 'warn';
}

function Message({ message, typeMessage }: MessageProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={classNames({ [styles[typeMessage]]: true })}>{message}</h2>
    </div>
  );
}

export default Message;
