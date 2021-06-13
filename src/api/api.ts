import axios from 'axios';
import { Account } from '../types/account';

export const instance = axios.create({
    baseURL: 'http://localhost:32468/sinus_shop'
});

export const getProducts = () => instance.get('/products');
export const getProduct = (id: string) => instance.get(`/products/${id}`);

export const loginAccount = (username: string, password: string) => instance.post('/account/login', { username, password });
export const getAccount = (id: string) => instance.get(`/account/${id}`);
export const updateAccount = (id: string, account: Account) => instance.patch(`/account/${id}`, { account });

export const getCart = (id: string) => instance.get(`/account/${id}/cart`);