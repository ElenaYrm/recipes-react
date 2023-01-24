import axios from 'axios';

export type Params = {
  [n: string]: string;
};

// to get data with or without params
export function getData<T>(url: string, params?: Params) {
  return axios.get<T>(url, {
    params: params ? params : {},
  });
}
