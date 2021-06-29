import axios from 'axios';
import Account from '../types/account';

export const instance = axios.create({
    baseURL: 'http://localhost:32468/sinus_shop'
});

const getProducts = () => instance.get('/products');
const getProduct = (id: string) => instance.get(`/products/product/${id}`);
const getProductQuantityInStock = (id: string) => instance.get(`/products/product/${id}/stock`);

const loginAccount = (username: string, password: string) => instance.post('/account/login', { username, password });
const getAccount = (id: string) => instance.get(`/account/${id}`);
const updateAccount = (id: string, account: Account) => instance.patch(`/account/${id}`, { account });

const getCart = (accountId: string) => instance.get(`/account/${accountId}/cart`);
const putCartProduct = (accountId: string, productId: string, quantity: number) => instance.put(`/account/${accountId}/cart/${productId}/quantity/${quantity}`)
const removeCartProduct = (accountId: string, productId: string) => instance.delete(`/account/${accountId}/cart/${productId}`);
const updateCartProduct = (accountId: string, productId: string, newQuantity: number) => instance.patch(`/account/${accountId}/cart/${productId}/quantity/${newQuantity}`);

// eslint-disable-next-line
export default {getProducts, getProduct, getProductQuantityInStock, loginAccount, getAccount, updateAccount, getCart, putCartProduct, removeCartProduct, updateCartProduct};