import { RootState } from '../store';

export const selectCategoriesInfo = (state: RootState) => state.categoriesInfo.categories;
export const selectLoadCategoriesInfo = (state: RootState) => ({
  isLoading: state.categoriesInfo.isLoading,
  error: state.categoriesInfo.error,
});
