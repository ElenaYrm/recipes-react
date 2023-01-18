export interface IIngredientLocal {
  id: string;
  name: string;
  img: string;
}

export interface IIngredientsListAPI {
  meals: IIngredientAPI[];
}

export interface IIngredientAPI {
  idIngredient: string;
  strIngredient: string;
  strDescription: string | null;
  strType: string | null;
}
