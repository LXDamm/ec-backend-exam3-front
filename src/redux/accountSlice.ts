import { createSlice } from '@reduxjs/toolkit';
import { Address } from 'cluster';
import Account, { CartProduct } from '../types/account';

const accountSlice = createSlice({
    name: 'account',
    initialState: null as unknown as Account,
    reducers: {
        setAccount: (state, action) => {
            state = action.payload;
            return state;
        },
        increaseCartProduct: (state, action) => {
            if (state.cart) {
                const product = state.cart.find((product: CartProduct) => product.id === action.payload);
                if (product) product.quantity++;
                return state;
            }
        },
        deincreaseCartProduct: (state, action) => {
            if (state.cart) {
                const product = state.cart.find((product: CartProduct) => product.id === action.payload);
                if (product && product.quantity > 0) product.quantity--;
                return state;
            }
        }
    }
});

export const { setAccount, increaseCartProduct, deincreaseCartProduct } = accountSlice.actions;
export default accountSlice.reducer;