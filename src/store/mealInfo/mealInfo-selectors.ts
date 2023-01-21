import { RootState } from '../store';

export const selectMealInfo = (state: RootState) => state.mealInfo.meals[0];
export const selectLoadMealInfo = (state: RootState) => ({
  isLoading: state.mealInfo.isLoading,
  error: state.mealInfo.error,
});
