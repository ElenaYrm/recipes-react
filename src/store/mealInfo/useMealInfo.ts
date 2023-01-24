import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { selectLoadMealInfo, selectMealInfo } from './mealInfo-selectors';
import { loadMealInfo } from './mealInfo-slice';
import { MEAL_ID_URL } from '../../axios/configAxios';
import { IMealLocal } from '../../types/meal';

export function useMealInfo(id: string): [IMealLocal, ReturnType<typeof selectLoadMealInfo>] {
  const dispatch = useAppDispatch();
  const meal = useSelector(selectMealInfo);
  const { isLoading, error } = useSelector(selectLoadMealInfo);

  useEffect(() => {
    // only when this meal wasn't loaded before

    if (id && meal?.id !== id) dispatch(loadMealInfo({ url: MEAL_ID_URL, params: { i: id } }));
  }, []);

  return [meal, { isLoading, error }];
}
