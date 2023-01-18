import axios from 'axios';

export type Params = {
  [n: string]: string;
};

export function getData<T>(url: string, params?: Params) {
  return axios.get<T>(url, {
    params: params ? params : {},
  });
}
