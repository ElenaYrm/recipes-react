import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import {
  selectLoadRecipesList,
  selectPathRecipesList,
  selectRecipesList,
} from './recipesList-selectors';
import { addPath, loadRecipesList } from './recipesList-slice';
import { FILTER_URL } from '../../axios/configAxios';
import { IRecipesLocal } from '../../types/recipe';
import { Params } from '../../axios/getData';

export function useRecipesList(
  path: string
): [IRecipesLocal[], ReturnType<typeof selectLoadRecipesList>] {
  const dispatch = useAppDispatch();
  const recipesList = useSelector(selectRecipesList);
  const prevPath = useSelector(selectPathRecipesList);
  const { isLoading, error } = useSelector(selectLoadRecipesList);
  let filter: Params = {};

  useEffect(() => {
    if (path !== prevPath) {
      if (path.includes('category')) {
        filter = {
          c: path.slice('category'.length + 2),
        };
      }
      if (path.includes('ingredients')) {
        filter = {
          i: path.slice('ingredients'.length + 2),
        };
      }
      if (path.includes('area')) {
        filter = {
          a: path.slice('area'.length + 2),
        };
      }

      dispatch(loadRecipesList({ url: FILTER_URL, params: filter }));
      dispatch(addPath(path));
    }
  }, []);

  return [recipesList, { isLoading, error }];
}
