import classNames from 'classnames';

import styles from './image.module.scss';

interface ImageProps {
  src: string;
  title: string;
  className?: string;
}

function Image({ src, title, className }: ImageProps) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <img
        src={src}
        alt={title}
        className={styles.image}
        onError={(event) => {
          event.currentTarget.src = process.env.PUBLIC_URL + '/images/default-image.png';
        }}
      />
    </div>
  );
}

export default Image;
