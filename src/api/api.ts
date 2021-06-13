import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:32468/sinus_shop'
});

const getProducts = () => instance.get('/products');
const getProduct = (id: string) => instance.get(`/products/${id}`);

const loginAccount = (username: string, password: string) => instance.post('/account/login', { username, password });
const getAccount = (id: string) => instance.get(`/account/${id}`);

const getCart = (id: string) => instance.get(`/account/${id}/cart`);

export { instance, getProducts, getProduct, loginAccount, getAccount, getCart };