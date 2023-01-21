import { RootState } from '../store';

export const selectAreasList = (state: RootState) => state.areasList.areas;
export const selectLoadAreasList = (state: RootState) => ({
  isLoading: state.areasList.isLoading,
  error: state.areasList.error,
});
