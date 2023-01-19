import { useLocation } from 'react-router-dom';
import { useRecipesList } from '../../store/recipesList/useRecipesList';
import { useFilterBySearch, useShowMoreBtn } from '../../hooks';
import { CustomSearch } from '../shared/CustomSearch';
import { CustomButton } from '../shared/CustomButton';
import { RecipeCard } from './RecipeCard';

import styles from './recipesList.module.scss';

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
        <CustomSearch placeholder={'Enter meal'} />

        <h2 className={styles.recipes__title}>
          List of recipes:
          <span>{title}</span>
        </h2>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {data.length > 0 ? (
              <ul className={styles.recipes__list}>
                {data.length > 0 && data.map((item) => <RecipeCard key={item.id} {...item} />)}
              </ul>
            ) : (
              <div>No results</div>
            )}

            {isDisabled ? null : (
              <div className={styles.recipes__wrapper}>
                <CustomButton
                  text={'More meals'}
                  handleClick={handleCount}
                  buttonType={'red'}
                  className={styles.recipes__btn}
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

export default RecipesList;
