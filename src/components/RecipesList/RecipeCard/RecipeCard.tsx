import { Link } from 'react-router-dom';
import { Image } from '../../shared/Image';
import { IRecipesLocal } from '../../../types/recipe';

import styles from './recipeCard.module.scss';

function RecipeCard({ id, img, name }: IRecipesLocal) {
  return (
    <li>
      <Link to={`/recipe/${id}`} className={styles.link}>
        <article className={styles.recipe}>
          <Image src={img} title={name} className={styles.recipe__image} />

          <h3 className={styles.recipe__name}>{name}</h3>
        </article>
      </Link>
    </li>
  );
}

export default RecipeCard;
