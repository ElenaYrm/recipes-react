import { Icon } from '../../shared/Icon';
import { IconId } from '../../../types/enums';

import styles from './mediaItem.module.scss';

export interface MediaItemProps {
  name: string;
  icon: IconId;
  link: string;
}

function MediaItem({ name, icon, link }: MediaItemProps) {
  return (
    <li className={styles.media}>
      <a href={link} aria-label={name}>
        <Icon id={icon} className={styles.media__icon} />
      </a>
    </li>
  );
}

export default MediaItem;
