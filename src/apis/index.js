import axios from "axios";
const instance = axios.create({
  baseURL: 'https://localhost:7063/api',
  timeout: 3000,
});
axios.interceptors.request.use(function (congfig) {
  return congfig;

}, function (error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
export default instance;
