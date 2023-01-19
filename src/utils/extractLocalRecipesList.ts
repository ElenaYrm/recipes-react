import { IRecipesLocal, IRecipesListAPI } from '../types/recipe';

// transform data of recipes list from API to local to improve understanding

export const extractLocalRecipesList = (list: IRecipesListAPI[]): IRecipesLocal[] => {
  return list.map((item) => ({
    id: item.idMeal,
    name: item.strMeal,
    img: item.strMealThumb,
  }));
};
