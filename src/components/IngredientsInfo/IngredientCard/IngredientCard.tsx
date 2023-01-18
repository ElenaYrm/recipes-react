import { Link } from 'react-router-dom';
import { IIngredientLocal } from '../../../types/ingredient';

import styles from './ingredientCard.module.scss';

function IngredientCard({ name, img }: IIngredientLocal) {
  const linkName = name.split(' ').join('_').toLowerCase();

  return (
    <li>
      <Link to={`/ingredients/${linkName}`}>
        <article className={styles.ingredient}>
          <div className={styles.ingredient__image}>
            <img src={img} alt={name} />
          </div>
          <h3 className={styles.ingredient__name}>{name}</h3>
        </article>
      </Link>
    </li>
  );
}

export default IngredientCard;
