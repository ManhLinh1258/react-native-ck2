import axios from 'axios'
export const instance = axios.create({
  baseURL: 'http://ecommerce.hungvu.net',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
export const getProduct = (params) => instance.post('/get-products', params)