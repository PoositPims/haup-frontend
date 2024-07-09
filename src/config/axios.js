import axios from "axios";
import { API_URL } from "./env";

axios.defaults.baseURL = API_URL;

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      window.location.reload();
      return;
    }
    return Promise.reject(err);
  }
);
export default axios;
