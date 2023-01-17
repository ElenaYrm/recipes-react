import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { randomReducer } from './randomRecipe/random-slice';
import { categoriesReducer } from './categoriesInfo/categories-slice';

export const store = configureStore({
  reducer: {
    random: randomReducer,
    categoriesInfo: categoriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
