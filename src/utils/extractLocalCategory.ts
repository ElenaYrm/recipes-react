import { ICategoryAPI, ICategoryLocal } from '../types';

export const extractLocalCategory = (category: ICategoryAPI[]): ICategoryLocal[] => {
  return category.map((item) => ({
    id: item.idCategory,
    title: item.strCategory,
    descr: item.strCategoryDescription,
    img: item.strCategoryThumb,
  }));
};
