import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../axios/getData';
import { ICategoriesListAPI, ICategoryLocal } from '../../types/category';
import { extractLocalCategory } from '../../utils';

export const loadCategoriesInfo = createAsyncThunk<
  ICategoryLocal[],
  string,
  {
    state: { categoriesInfo: ICategoriesSlice };
    rejectValue: string;
  }
>(
  'categoriesInfo/loadCategoriesInfo',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await getData<ICategoriesListAPI>(url);
      return extractLocalCategory(response.data.categories);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Unknown error');
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        categoriesInfo: { isLoading },
      } = getState();

      if (isLoading) {
        return false;
      }
    },
  }
);

interface ICategoriesSlice {
  categories: ICategoryLocal[];
  isLoading: boolean;
  error: string;
}

const initialState: ICategoriesSlice = {
  categories: [],
  isLoading: false,
  error: '',
};

const categoriesSlice = createSlice({
  name: 'allCategories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadCategoriesInfo.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loadCategoriesInfo.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(loadCategoriesInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something was wrong';
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
