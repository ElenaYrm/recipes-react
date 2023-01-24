import { useRandomRecipe } from '../../store/randomRecipe/useRandomRecipe';
import { useAppDispatch } from '../../store/store';
import { loadRandomRecipe } from '../../store/randomRecipe/random-slice';
import { RANDOM_URL } from '../../axios/configAxios';
import { CustomButton } from '../shared/CustomButton';
import { Icon } from '../shared/Icon';
import { Loader } from '../shared/Loader';
import { Message } from '../shared/Message';
import { RandomCard } from './RandomCard';
import { IconId } from '../../types/enums';

import styles from './randomMeal.module.scss';

function RandomMeal() {
  const [recipe, { isLoading, error }] = useRandomRecipe();

  // change random meal on button click
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
            icon={<Icon id={IconId.arrowReload} className={styles.random__icon} />}
          />
        </div>

        {isLoading && <Loader />}
        {error && <Message message={error} typeMessage={'error'} />}

        {!isLoading && !error && <RandomCard {...recipe} />}
      </div>
    </section>
  );
}

export default RandomMeal;
