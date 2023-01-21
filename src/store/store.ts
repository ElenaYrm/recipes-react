import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { randomReducer } from './randomRecipe/random-slice';
import { categoriesReducer } from './categoriesInfo/categories-slice';
import { ingredientsReducer } from './ingredientsInfo/ingredients-slice';
import { recipesListReducer } from './recipesList/recipesList-slice';
import { mealReducer } from './mealInfo/mealInfo-slice';

export const store = configureStore({
  reducer: {
    random: randomReducer,
    categoriesInfo: categoriesReducer,
    ingredientsInfo: ingredientsReducer,
    recipesList: recipesListReducer,
    mealInfo: mealReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
