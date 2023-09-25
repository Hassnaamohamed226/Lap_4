import axios from 'axios'

export const axiosInstance = axios.create({
    // apis base url
    baseURL: 'https://dummyjson.com',
    // timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  });