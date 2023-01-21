import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Args } from '../ingredientsInfo/ingredients-slice';
import { getData } from '../../axios/getData';
import { IAreaLocal, IAreasListAPI } from '../../types/area';
import { extractLocalAreasList } from '../../utils';

export const loadAreasList = createAsyncThunk<
  IAreaLocal[],
  Args,
  {
    state: { areasList: IAreasListSlice };
    rejectValue: string;
  }
>(
  'areasList/loadAreasList',
  async (args, { rejectWithValue }) => {
    try {
      const response = await getData<IAreasListAPI>(args.url, args.params);
      return extractLocalAreasList(response.data.meals);
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
        areasList: { isLoading },
      } = getState();

      if (isLoading) {
        return false;
      }
    },
  }
);

interface IAreasListSlice {
  areas: IAreaLocal[];
  isLoading: boolean;
  error: string;
}

const initialState: IAreasListSlice = {
  areas: [],
  isLoading: false,
  error: '',
};

const areasLiatSlice = createSlice({
  name: 'areas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAreasList.pending, (state) => {
        state.isLoading = true;
        state.error = '';
      })
      .addCase(loadAreasList.fulfilled, (state, action) => {
        state.areas = action.payload;
        state.isLoading = false;
      })
      .addCase(loadAreasList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something was wrong';
      });
  },
});

export const areasListReducer = areasLiatSlice.reducer;
