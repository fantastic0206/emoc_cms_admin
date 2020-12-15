import axios from 'axios';
import { getJwt } from './jwt';

//change to an environment url eventually
const url = process.env.REACT_APP_API_URL;
const customAxios = axios.create({
  /* eslint-disable-next-line */
  // baseURL: process.env.REACT_APP_API_URL,
  // baseURL: "http://localhost:5000"
  baseURL: url
});

customAxios.defaults.headers.common['Content-Type'] = 'application/json'
customAxios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
customAxios.defaults.headers.put['Content-Type'] = 'multipart/form-data'
customAxios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const setAuthHeader = (token) => {
  customAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
if (getJwt()) {
  setAuthHeader(getJwt())
}

customAxios.interceptors.response.use(response => {
  if (response.config) console.info(`[AXIOS]:${response.config.method.toUpperCase()}:${response.config.url}`, {config: response.config, data: response.data});
  return { ok: true, status: response.status, data: (response || {}).data }
}, error => {
  return { ok: false, error, errMessage: error.response.statusText, data: (error.response || {}).data }
});

export { setAuthHeader };

customAxios.origin = axios;
export default customAxios;