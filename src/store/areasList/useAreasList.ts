import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';
import { selectAreasList, selectLoadAreasList } from './areasList-selectors';
import { IAreaLocal } from '../../types/area';
import { loadAreasList } from './areasList-slice';
import { LIST_URL } from '../../axios/configAxios';

export function useAreasList(): [IAreaLocal[], ReturnType<typeof selectLoadAreasList>] {
  const dispatch = useAppDispatch();
  const areas = useSelector(selectAreasList);
  const { isLoading, error } = useSelector(selectLoadAreasList);

  useEffect(() => {
    if (areas.length === 0) dispatch(loadAreasList({ url: LIST_URL, params: { a: 'list' } }));
  }, []);

  return [areas, { isLoading, error }];
}
