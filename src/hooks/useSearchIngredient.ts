import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IIngredientLocal } from '../types/ingredient';

// have to filter array of ingredients to search by ingredients
// because API doesn't provide search by ingredients

export function useSearchIngredient(arr: IIngredientLocal[]): IIngredientLocal[] {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [filterData, setFilterData] = useState<IIngredientLocal[]>([]);
  let result: IIngredientLocal[] = [];

  useEffect(() => {
    if (search && arr.length > 0) {
      result = arr.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
      setFilterData(result);
    } else {
      setFilterData(arr);
    }
  }, [arr, search]);

  return filterData;
}
