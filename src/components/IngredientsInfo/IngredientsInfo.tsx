import { useIngredients } from '../../store/ingredientsInfo/useIngredients';
import { useShowMoreBtn } from '../../hooks';
import { useFilterBySearch } from '../../hooks';
import { IngredientCard } from './IngredientCard';
import { CustomButton } from '../shared/CustomButton';
import { CustomSearch } from '../shared/CustomSearch';
import { BackButton } from '../shared/BackButton';
import { Loader } from '../shared/Loader';
import { Message } from '../shared/Message';

import styles from './ingredientsInfo.module.scss';

const step = 10;

function IngredientsInfo() {
  const [ingredients, { isLoading, error }] = useIngredients();
  const filterIngredients = useFilterBySearch(ingredients);
  const [data, handleCount, isDisabled] = useShowMoreBtn(filterIngredients, step);

  return (
    <section className={styles.ingredients}>
      <div className="container">
        <BackButton />

        <CustomSearch placeholder={'Enter Ingredient'} />

        <h2 className={styles.ingredients__title}>Ingredients</h2>

        {isLoading && <Loader />}
        {error && <Message message={error} typeMessage={'error'} />}

        {!isLoading && !error && (
          <>
            {data.length > 0 ? (
              <ul className={styles.ingredients__list}>
                {data.map((item) => (
                  <IngredientCard key={item.id} {...item} />
                ))}
              </ul>
            ) : (
              <Message message={'No result'} typeMessage={'warn'} />
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
      </div>
    </section>
  );
}

export default IngredientsInfo;
