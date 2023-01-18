import { useIngredients } from '../../store/ingredientsInfo/useIngredients';
import { IngredientCard } from './IngredientCard';
import { CustomButton } from '../shared/CustomButton';
import { CustomSearch } from '../shared/CustomSearch';
import { useShowMoreBtn } from '../../hooks';
import { useSearchIngredient } from '../../hooks';

import styles from './ingredientsInfo.module.scss';

const step = 10;

function IngredientsInfo() {
  const [ingredients, { isLoading, error }] = useIngredients();
  const filterIngredients = useSearchIngredient(ingredients);
  const [data, handleCount, isDisabled] = useShowMoreBtn(filterIngredients, step);

  return (
    <section className={styles.ingredients}>
      <div className="container">
        <CustomSearch placeholder={'Enter Ingredient'} />

        <h2 className={styles.ingredients__title}>Ingredients</h2>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {data.length > 0 ? (
              <ul className={styles.ingredients__list}>
                {data.map((item) => (
                  <IngredientCard key={item.id} {...item} />
                ))}
              </ul>
            ) : (
              <div>No results</div>
            )}

            {isDisabled ? null : (
              <div className={styles.ingredients__wrapper}>
                <CustomButton
                  text={'More ingredients'}
                  handleClick={handleCount}
                  buttonType={'red'}
                  className={styles.ingredients__btn}
                />
              </div>
            )}
          </>
        )}

        {error && <div>Error...</div>}
      </div>
    </section>
  );
}

export default IngredientsInfo;
