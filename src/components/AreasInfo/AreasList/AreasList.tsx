import { memo } from 'react';
import { Link } from 'react-router-dom';
import { IAreaLocal } from '../../../types/area';

import styles from './areasList.module.scss';

interface ListProps {
  areas: IAreaLocal[];
}

function AreasList({ areas }: ListProps) {
  return (
    <ul className={styles.areas__list}>
      {areas.map((item) => (
        <li key={item.name} className={styles.areas__item}>
          <Link to={`/area/${item.name}`}>#{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(AreasList);
