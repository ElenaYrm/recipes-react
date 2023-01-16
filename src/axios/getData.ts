import axios from 'axios';

type Params = {
  [n: string]: string;
};

export function getData<T>(url: string, params?: Params) {
  return axios.get<T>(url, {
    params: params ? params : {},
  });
}
