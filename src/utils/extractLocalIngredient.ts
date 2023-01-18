import { IIngredientAPI, IIngredientLocal } from '../types/ingredient';
import { IMAGE_INGREDIENT_URL } from '../axios/configAxios';

// transform ingredients data from API to local to improve understanding
// and config image url

export const extractLocalIngredient = (category: IIngredientAPI[]): IIngredientLocal[] => {
  return category.map((item) => ({
    id: item.idIngredient,
    name: item.strIngredient,
    img: `${IMAGE_INGREDIENT_URL}${item.strIngredient}.png`,
  }));
};
