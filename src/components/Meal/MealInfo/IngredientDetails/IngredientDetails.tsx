import { Ingredient } from '../../../../types/meal';

import styles from './ingredientDetails.module.scss';

function IngredientDetails({ ingredient, measure }: Ingredient) {
  return (
    <li className={styles.line}>
      <span>{ingredient}</span>
      <span></span>
      <span>{measure}</span>
    </li>
  );
}

export default IngredientDetails;
