import { Link } from 'react-router-dom';
import { IRecipesLocal } from '../../../types/recipe';

import styles from './recipeCard.module.scss';

function RecipeCard({ id, img, name }: IRecipesLocal) {
  return (
    <li>
      <Link to={`/recipe/${id}`}>
        <article className={styles.recipe}>
          <div className={styles.recipe__image}>
            <img src={img} alt={name} />
          </div>
          <h3 className={styles.recipe__name}>{name}</h3>
        </article>
      </Link>
    </li>
  );
}

export default RecipeCard;
