import { DetailInfo } from '../../../types/meal';

import styles from './descriptionItem.module.scss';

interface DescriptionItemProps extends DetailInfo {
  isLink?: boolean;
}

function DescriptionItem({ title, descr, isLink = false }: DescriptionItemProps) {
  return (
    <li className={styles.descr}>
      {isLink ? (
        <a href={descr} target="_blank">
          <span className={styles.descr__title}>{title + ': '}</span>
          {descr}
        </a>
      ) : (
        <>
          <span className={styles.descr__title}>{title + ': '}</span>
          {descr}
        </>
      )}
    </li>
  );
}

export default DescriptionItem;
