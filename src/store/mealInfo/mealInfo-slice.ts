import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Args } from '../ingredientsInfo/ingredients-slice';
import { getData } from '../../axios/getData';
import { extractLocalMeal } from '../../utils';
import { IMealLocal, IMealsAPI } from '../../types/meal';

export const loadMealInfo = createAsyncThunk<
  IMealLocal[],
  Args,
  {
    state: { mealInfo: IMealInfoSlice };
    rejectValue: string;
  }
>(
  'mealInfo/loadMealInfo',
  async (data, { rejectWithValue }) => {
    try {
      const response = await getData<IMealsAPI>(data.url, data.params);
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
        mealInfo: { isLoading },
      } = getState();

      if (isLoading) {
        return false;
      }
    },
  }
);

interface IMealInfoSlice {
  meals: IMealLocal[];
  isLoading: boolean;
  error: string;
}

const initialState: IMealInfoSlice = {
  meals: [],
  isLoading: false,
  error: '',
};

const mealInfoSlice = createSlice({
  name: 'mealRecipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadMealInfo.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loadMealInfo.fulfilled, (state, action) => {
        state.meals = action.payload;
        state.isLoading = false;
      })
      .addCase(loadMealInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something was wrong';
      });
  },
});

export const mealReducer = mealInfoSlice.reducer;
