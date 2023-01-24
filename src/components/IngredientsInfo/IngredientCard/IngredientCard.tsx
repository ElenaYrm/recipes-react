import { Link } from 'react-router-dom';
import { Image } from '../../shared/Image';
import { IIngredientLocal } from '../../../types/ingredient';

import styles from './ingredientCard.module.scss';

function IngredientCard({ name, img }: IIngredientLocal) {
  const linkName = name.split(' ').join('_').toLowerCase();

  return (
    <li>
      <Link to={`/ingredients/${linkName}`} className={styles.link}>
        <article className={styles.ingredient}>
          <Image src={img} title={name} className={styles.ingredient__image} />

          <h3 className={styles.ingredient__name}>{name}</h3>
        </article>
      </Link>
    </li>
  );
}

export default IngredientCard;
