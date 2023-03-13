import axios from 'axios';
import env from '@config/env';

const axiosClient = axios.create({
  baseURL: `${env.VITE_BACKEND_URL}`,
});

export const registerAuthorizationToken = (token: string) => {
  axiosClient.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeAuthorizationToken = () => {
  delete axiosClient.defaults.headers.common.Authorization;
};

export default axiosClient;
