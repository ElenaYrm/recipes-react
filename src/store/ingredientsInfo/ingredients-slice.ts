import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData, Params } from '../../axios/getData';
import { IIngredientLocal, IIngredientsListAPI } from '../../types/ingredient';
import { extractLocalIngredient } from '../../utils';

export type Args = {
  url: string;
  params: Params;
};

export const loadIngredientsInfo = createAsyncThunk<
  IIngredientLocal[],
  Args,
  {
    state: { ingredientsInfo: IIngredientsSlice };
    rejectValue: string;
  }
>(
  'ingredientsInfo/loadIngredientsInfo',
  async (data: Args, { rejectWithValue }) => {
    try {
      const response = await getData<IIngredientsListAPI>(data.url, data.params);
      return extractLocalIngredient(response.data.meals);
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
        ingredientsInfo: { isLoading },
      } = getState();

      if (isLoading) {
        return false;
      }
    },
  }
);

interface IIngredientsSlice {
  ingredients: IIngredientLocal[];
  isLoading: boolean;
  error: string;
}

const initialState: IIngredientsSlice = {
  ingredients: [],
  isLoading: false,
  error: '',
};

const ingredientsSlice = createSlice({
  name: 'allIngredients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadIngredientsInfo.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loadIngredientsInfo.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
      })
      .addCase(loadIngredientsInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something was wrong';
      });
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
