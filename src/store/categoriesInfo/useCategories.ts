import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { selectCategoriesInfo, selectLoadCategoriesInfo } from './categories-selectors';
import { loadCategoriesInfo } from './categories-slice';
import { CATEGORIES_URL } from '../../axios/configAxios';
import { ICategoryLocal } from '../../types/category';

export function useCategories(): [ICategoryLocal[], ReturnType<typeof selectLoadCategoriesInfo>] {
  const dispatch = useAppDispatch();
  const categories = useSelector(selectCategoriesInfo);
  const { isLoading, error } = useSelector(selectLoadCategoriesInfo);

  useEffect(() => {
    if (categories.length === 0) dispatch(loadCategoriesInfo(CATEGORIES_URL));
  }, []);

  return [categories, { isLoading, error }];
}
