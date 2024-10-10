import axios from 'axios';

const baseURL = 'http://localhost:4250/api';

const onRequest = config => {
  return config;
};

const onRequestError = error => {
  return Promise.reject(error);
};

const onResponse = response => {
  return response;
};

const onResponseError = error => {
  return Promise.reject(error);
};

const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.request.use(onRequest, onRequestError);
axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
