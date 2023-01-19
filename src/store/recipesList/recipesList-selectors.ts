import { RootState } from '../store';

export const selectRecipesList = (state: RootState) => state.recipesList.list;
export const selectLoadRecipesList = (state: RootState) => ({
  isLoading: state.recipesList.isLoading,
  error: state.recipesList.error,
});
export const selectPathRecipesList = (state: RootState) => state.recipesList.path;
