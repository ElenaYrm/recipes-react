import { IAreaAPI, IAreaLocal } from '../types/area';

// transform data of areas list from API to local to improve understanding

export const extractLocalAreasList = (list: IAreaAPI[]): IAreaLocal[] => {
  return list.map((item) => ({
    name: item.strArea,
  }));
};
