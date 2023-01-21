import { IMealAPI, IMealLocal, Ingredient } from '../types/meal';

// transform recipe data from API to local to improve understanding
// and config ingredient and measure info

type newKeys = keyof IMealAPI;

export const extractLocalMeal = (recipe: IMealAPI[]): IMealLocal[] => {
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

    let searchVideo = '';
    if (item.strYoutube) {
      const videoURL = new URL(item.strYoutube);
      searchVideo = new URLSearchParams(videoURL.search).get('v') || '';
    }

    return {
      id: item.idMeal,
      name: item.strMeal,
      category: {
        title: 'Category',
        descr: item.strCategory,
      },
      area: {
        title: 'Cuisine',
        descr: item.strArea,
      },
      instructions: item.strInstructions,
      img: item.strMealThumb,
      video: searchVideo,
      source: {
        title: 'Source',
        descr: item.strSource,
      },
      ingredients: newIngredients,
    };
  });
};
