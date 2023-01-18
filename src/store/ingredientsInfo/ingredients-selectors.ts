import { RootState } from '../store';

export const selectIngredientsInfo = (state: RootState) => state.ingredientsInfo.ingredients;
export const selectLoadIngredientsInfo = (state: RootState) => ({
  isLoading: state.ingredientsInfo.isLoading,
  error: state.ingredientsInfo.error,
});
