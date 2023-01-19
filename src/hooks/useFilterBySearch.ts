import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IIngredientLocal } from '../types/ingredient';
import { IRecipesLocal } from '../types/recipe';

// have to filter array of ingredients or recipes by search input
// because API doesn't provide search by ingredients or recipes

type FilterType = IIngredientLocal | IRecipesLocal;

export function useFilterBySearch<T extends FilterType>(arr: Array<T>): Array<T> {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [filterData, setFilterData] = useState<Array<T>>([]);
  let result: Array<T> = [];

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
