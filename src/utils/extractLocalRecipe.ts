import { Ingredient, IRecipeAPI, IRecipeLocal } from '../types';

type newKeys = keyof IRecipeAPI;

export const extractLocalRecipe = (recipe: IRecipeAPI[]): IRecipeLocal[] => {
  return recipe.map((item) => {
    const newIngredients: Ingredient[] = [];
    for (let i = 1; i <= 20; i++) {
      const keyIngredient: newKeys = `strIngredient${i}` as newKeys;
      const keyMeasure: newKeys = `strMeasure${i}` as newKeys;
      if (item[keyIngredient]) {
        newIngredients.push({
          ingredient: item[keyIngredient],
          measure: item[keyMeasure].trim(),
        });
      }
    }

    return {
      id: item.idMeal,
      name: item.strMeal,
      category: item.strCategory,
      area: item.strArea,
      instructions: item.strInstructions,
      img: item.strMealThumb,
      video: item.strYoutube,
      source: item.strSource,
      ingredients: newIngredients,
    };
  });
};
