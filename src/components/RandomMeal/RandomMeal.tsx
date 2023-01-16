import { useRandomRecipe } from '../../store/randomRecipe/useRandomRecipe';
import { RandomCard } from './RandomCard';
import { useAppDispatch } from '../../store/store';
import { loadRandomRecipe } from '../../store/randomRecipe/random-slice';
import { RANDOM_URL } from '../../axios/configAxios';

import styles from './randomMeal.module.scss';
import { CustomButton } from '../shared/CustomButton';

function RandomMeal() {
  const [recipe, { isLoading, error }] = useRandomRecipe();

  const dispatch = useAppDispatch();
  function changeMeal(): void {
    dispatch(loadRandomRecipe(RANDOM_URL));
  }

  return (
    <section className={styles.random}>
      <div className="container">
        <div className={styles.random__caption}>
          <h2 className={styles.random__title}>Are you ready to cook?</h2>
          <CustomButton
            text={'Change meal'}
            handleClick={changeMeal}
            buttonType={'white'}
            className={styles.random__btn}
          />
        </div>

        {isLoading ? <div>Loading...</div> : <RandomCard {...recipe} />}
        {error && <div>Error...</div>}
      </div>
    </section>
  );
}

export default RandomMeal;