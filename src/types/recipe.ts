export interface IRecipesLocal {
  id: string;
  name: string;
  img: string;
}

export interface IRecipesListFromAPI {
  meals: IRecipesListAPI[];
}

export interface IRecipesListAPI {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}
