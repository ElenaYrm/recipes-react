import { IngredientDetails } from './IngredientDetails';
import { DescriptionItem } from '../../shared/DescriptionItem';
import { Image } from '../../shared/Image';
import { IMealLocal } from '../../../types/meal';

import styles from './mealInfo.module.scss';

function MealInfo({
  name,
  img,
  source,
  category,
  area,
  video,
  instructions,
  ingredients,
}: IMealLocal) {
  return (
    <>
      <Image src={img} title={name} className={styles.meal__image} />

      <h2 className={styles.meal__name}>{name}</h2>

      <div className={styles.meal__descr}>
        <ul className={styles.meal__info}>
          <DescriptionItem {...category} />
          <DescriptionItem {...area} />
          {source?.descr && <DescriptionItem {...source} isLink={true} />}
        </ul>

        <div className={styles.meal__ingredients}>
          <h3 className={styles.meal__caption}>Ingredients</h3>
          {ingredients?.length > 0 ? (
            <ul>
              {ingredients.map((item) => (
                <IngredientDetails key={item.ingredient + item.measure} {...item} />
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div>
        <h3 className={styles.meal__caption}>Instructions</h3>
        <p className={styles.meal__instructions}>{instructions}</p>
      </div>

      {video && (
        <div>
          <h3 className={styles.meal__caption}>Video</h3>
          <iframe
            className={styles.meal__video}
            title={name}
            src={`https://www.youtube.com/embed/${video}`}
          />
        </div>
      )}
    </>
  );
}

export default MealInfo;
