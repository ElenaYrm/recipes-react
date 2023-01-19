import { ICategoryAPI, ICategoryLocal } from '../types/category';

// transform category data from API to local to improve understanding

export const extractLocalCategory = (category: ICategoryAPI[]): ICategoryLocal[] => {
  return category.map((item) => ({
    id: item.idCategory,
    title: item.strCategory,
    descr: item.strCategoryDescription,
    img: item.strCategoryThumb,
  }));
};
