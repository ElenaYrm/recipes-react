import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { randomReducer } from './randomRecipe/random-slice';

export const store = configureStore({
  reducer: {
    random: randomReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
