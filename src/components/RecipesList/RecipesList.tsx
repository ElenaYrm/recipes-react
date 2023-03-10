import { useLocation } from 'react-router-dom';
import { useRecipesList } from '../../store/recipesList/useRecipesList';
import { useFilterBySearch, useShowMoreBtn } from '../../hooks';
import { CustomSearch } from '../shared/CustomSearch';
import { CustomButton } from '../shared/CustomButton';
import { BackButton } from '../shared/BackButton';
import { Icon } from '../shared/Icon';
import { Loader } from '../shared/Loader';
import { Message } from '../shared/Message';
import { RecipeCard } from './RecipeCard';
import { IconId } from '../../types/enums';

import styles from './recipesList.module.scss';

// number of recipes that is shown on page every time
const stepRecipe = 8;

function RecipesList() {
  const location = useLocation();
  const [list, { isLoading, error }] = useRecipesList(location.pathname);
  const filterRecipes = useFilterBySearch(list);
  const [data, handleCount, isDisabled] = useShowMoreBtn(filterRecipes, stepRecipe);

  const title = location.pathname.replaceAll(/[/_]/g, ' ').toLowerCase();

  return (
    <section className={styles.recipes}>
      <div className="container">
        <BackButton />

        <CustomSearch placeholder={'Enter meal'} />

        <h2 className={styles.recipes__title}>
          List of recipes:
          <span>{title}</span>
        </h2>

        {isLoading && <Loader />}
        {error && <Message message={error} typeMessage={'error'} />}

        {!isLoading && !error && (
          <>
            {data.length > 0 ? (
              <ul className={styles.recipes__list}>
                {data.length > 0 && data.map((item) => <RecipeCard key={item.id} {...item} />)}
              </ul>
            ) : (
              <Message message={'No result'} typeMessage={'warn'} />
            )}

            {isDisabled ? null : (
              <div className={styles.recipes__wrapper}>
                <CustomButton
                  text={'More meals'}
                  handleClick={handleCount}
                  buttonType={'purple'}
                  className={styles.recipes__btn}
                  icon={<Icon id={IconId.arrowDown} className={styles.recipes__icon} />}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default RecipesList;
