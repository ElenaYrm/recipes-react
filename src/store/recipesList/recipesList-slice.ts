import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Args } from '../ingredientsInfo/ingredients-slice';
import { getData } from '../../axios/getData';
import { extractLocalRecipesList } from '../../utils';
import { IRecipesListFromAPI, IRecipesLocal } from '../../types/recipe';

export const loadRecipesList = createAsyncThunk<
  IRecipesLocal[],
  Args,
  {
    state: { recipesList: IRecipesListSlice };
    rejectValue: string;
  }
>(
  'recipesList/loadRecipesList',
  async (data: Args, { rejectWithValue }) => {
    try {
      const response = await getData<IRecipesListFromAPI>(data.url, data.params);
      return extractLocalRecipesList(response.data.meals);
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
        recipesList: { isLoading },
      } = getState();

      if (isLoading) {
        return false;
      }
    },
  }
);

interface IRecipesListSlice {
  list: IRecipesLocal[];
  isLoading: boolean;
  error: string;
  path: string;
}

const initialState: IRecipesListSlice = {
  list: [],
  isLoading: false,
  error: '',
  path: '',
};

const recipesListSlice = createSlice({
  name: 'recipesList',
  initialState,
  reducers: {
    addPath: (state, action: PayloadAction<typeof state.path>) => {
      state.path = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRecipesList.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loadRecipesList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(loadRecipesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something was wrong';
      });
  },
});

export const recipesListReducer = recipesListSlice.reducer;
export const { addPath } = recipesListSlice.actions;
