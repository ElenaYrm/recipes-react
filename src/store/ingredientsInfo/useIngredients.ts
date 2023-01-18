import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { selectIngredientsInfo, selectLoadIngredientsInfo } from './ingredients-selectors';
import { loadIngredientsInfo } from './ingredients-slice';
import { LIST_URL } from '../../axios/configAxios';
import { IIngredientLocal } from '../../types/ingredient';

export function useIngredients(): [
  IIngredientLocal[],
  ReturnType<typeof selectLoadIngredientsInfo>
] {
  const dispatch = useAppDispatch();
  const ingredients = useSelector(selectIngredientsInfo);
  const { isLoading, error } = useSelector(selectLoadIngredientsInfo);

  useEffect(() => {
    if (ingredients.length === 0)
      dispatch(loadIngredientsInfo({ url: LIST_URL, params: { i: 'list' } }));
  }, []);

  return [ingredients, { isLoading, error }];
}
