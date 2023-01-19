import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from '../../axios/getData';
import { extractLocalMeal } from '../../utils';
import { IMealLocal, IMealsAPI } from '../../types/meal';

export const loadRandomRecipe = createAsyncThunk<
  IMealLocal[],
  string,
  {
    state: { random: IRandomSlice };
    rejectValue: string;
  }
>(
  'random/loadRandomRecipe',
  async (url: string, { rejectWithValue }) => {
    try {
      const response = await getData<IMealsAPI>(url);
      return extractLocalMeal(response.data.meals);
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
        random: { isLoading },
      } = getState();

      if (isLoading) {
        return false;
      }
    },
  }
);

interface IRandomSlice {
  recipe: IMealLocal[];
  isLoading: boolean;
  error: string;
}

const initialState: IRandomSlice = {
  recipe: [],
  isLoading: false,
  error: '',
};

const randomSlice = createSlice({
  name: 'randomRecipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadRandomRecipe.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loadRandomRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipe = action.payload;
      })
      .addCase(loadRandomRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something was wrong';
      });
  },
});

export const randomReducer = randomSlice.reducer;
