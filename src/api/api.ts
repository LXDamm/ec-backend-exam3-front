import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/sinus_shop'
});

const getProducts = () => instance.get('/products');
const getProduct = (id: string) => instance.get(`/products/${id}`);

export { instance, getProducts, getProduct };