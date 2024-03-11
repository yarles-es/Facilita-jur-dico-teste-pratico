import axios, { AxiosResponse } from "axios";

export const currentUrl = "http://localhost:30100/";

const api = axios.create({
  baseURL: currentUrl,
});
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
