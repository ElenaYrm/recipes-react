import { RootState } from '../store';

export const selectRandomRecipe = (state: RootState) => state.random.recipe[0];
export const selectLoadRandomInfo = (state: RootState) => ({
  isLoading: state.random.isLoading,
  error: state.random.error,
});
