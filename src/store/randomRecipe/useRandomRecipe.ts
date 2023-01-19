import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { selectLoadRandomInfo, selectRandomRecipe } from './random-selectors';
import { loadRandomRecipe } from './random-slice';
import { RANDOM_URL } from '../../axios/configAxios';
import { IMealLocal } from '../../types/meal';

export function useRandomRecipe(): [IMealLocal, ReturnType<typeof selectLoadRandomInfo>] {
  const dispatch = useAppDispatch();
  const recipe = useSelector(selectRandomRecipe);
  const { isLoading, error } = useSelector(selectLoadRandomInfo);

  useEffect(() => {
    if (!recipe) {
      dispatch(loadRandomRecipe(RANDOM_URL));
    }
  }, [recipe]);

  return [recipe, { isLoading, error }];
}
