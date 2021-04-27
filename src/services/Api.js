import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://tch-app.s3.ap-southeast-1.amazonaws.com/menufrontend/605da09f717e5d00114a3cda_oolong-nuong-new.jpg',
  timeout: 100000, // 1min
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
export const getProduct = (params) => instance.get('/get-products', params)