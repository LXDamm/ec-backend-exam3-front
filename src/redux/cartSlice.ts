import { createSlice } from '@reduxjs/toolkit';
import Cart, { CartItem } from '../types/cart';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [] as Array<CartItem>
    } as Cart,
    reducers: {
        setCart: (state, action) => {
            state = action.payload;
            return state;
        },
        removeCartProduct: (state, action) => {
            if (state.products) {
                const productIndex = state.products.findIndex((product: CartItem) => product.id === action.payload);
                state.products.splice(productIndex, 1);
                return state;
            }
        },
        addCartProduct: (state, action) => {
            if (state.products) {
                console.log("id: " + action.payload);
                const productItemUpdate = state.products.find((product: CartItem) => product.id === action.payload);
                if (productItemUpdate) {
                    productItemUpdate.quantity++;
                } else {
                    const cartProduct: CartItem = {
                        id: action.payload,
                        quantity: 1

                    };
                    state.products.push(cartProduct);
                }
                return state;
            }
        },
        increaseCartProduct: (state, action) => {
            if (state.products) {
                const product = state.products.find((product: CartItem) => product.id === action.payload);
                if (product) product.quantity++;
                return state;
            }
        },
        decreaseCartProduct: (state, action) => {
            if (state.products) {
                const product = state.products.find((product: CartItem) => product.id === action.payload);
                if (product && product.quantity > 0) product.quantity--;
                return state;
            }
        }
    }
});

export const { setCart, removeCartProduct, addCartProduct, increaseCartProduct, decreaseCartProduct } = cartSlice.actions;
export default cartSlice.reducer;