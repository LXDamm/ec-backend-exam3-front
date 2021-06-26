import { createSlice } from '@reduxjs/toolkit';
import Account, { CartProduct } from '../types/account';

const accountSlice = createSlice({
    name: 'account',
    initialState: null as unknown as Account,
    reducers: {
        setAccount: (state, action) => {
            state = action.payload;
            return state;
        },
        removeCartProduct: (state, action) => {
            if (state.cart) {
                const productIndex = state.cart.findIndex((product: CartProduct) => product.id === action.payload);
                state.cart.splice(productIndex, 1);
                return state;
            }
        },
        addCartProduct: (state, action) => {
            if (state.cart) {
                console.log("id: " + action.payload.id);
                const productIndex = state.cart.findIndex((product: CartProduct) => product.id === action.payload.id);
                if (productIndex > 0) {
                    state.cart[productIndex].quantity++;
                } else {
                    const cartProduct: CartProduct = {
                        id: action.payload.id,
                        quantity: 1,
                        name: action.payload.name,
                        imageUrl: action.payload.imageUrl
                        
                    };
                    state.cart.push(cartProduct);
                }
                return state;
            }
        },
        increaseCartProduct: (state, action) => {
            if (state.cart) {
                const product = state.cart.find((product: CartProduct) => product.id === action.payload);
                if (product) product.quantity++;
                return state;
            }
        },
        decreaseCartProduct: (state, action) => {
            if (state.cart) {
                const product = state.cart.find((product: CartProduct) => product.id === action.payload);
                if (product && product.quantity > 0) product.quantity--;
                return state;
            }
        }
    }
});

export const { setAccount, removeCartProduct, addCartProduct, increaseCartProduct, decreaseCartProduct } = accountSlice.actions;
export default accountSlice.reducer;