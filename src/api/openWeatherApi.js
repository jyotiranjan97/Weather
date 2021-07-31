import { create } from 'apisauce';

const api = create({
  baseURL: 'https://api.openweathermap.org',
  timeout: 10000,
});

export default api;
