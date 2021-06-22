import axios from 'axios';
import Account from '../types/account';

export const instance = axios.create({
    baseURL: 'http://localhost:32468/sinus_shop'
});

const getProducts = () => instance.get('/products');
const getProduct = (id: string) => instance.get(`/products/${id}`);
const getProductQuantityInStock = (id: string) => instance.get(`/products/${id}/stock`);

const loginAccount = (username: string, password: string) => instance.post('/account/login', { username, password });
const getAccount = (id: string) => instance.get(`/account/${id}`);
const updateAccount = (id: string, account: Account) => instance.patch(`/account/${id}`, { account });

const getCart = (id: string) => instance.get(`/account/${id}/cart`);

// eslint-disable-next-line
export default {getProducts, getProduct, getProductQuantityInStock, loginAccount, getAccount, updateAccount, getCart};