export interface ICategoryLocal {
  id: string;
  title: string;
  descr: string;
  img: string;
}

export interface ICategoriesListAPI {
  categories: ICategoryAPI[];
}

export interface ICategoryAPI {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}
