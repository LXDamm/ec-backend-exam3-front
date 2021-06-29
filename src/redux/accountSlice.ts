import { createSlice } from '@reduxjs/toolkit';
import Account from '../types/account';

const accountSlice = createSlice({
    name: 'account',
    initialState: null as unknown as Account,
    reducers: {
        setAccount: (state, action) => {
            state = action.payload;
            return state;
        },
        addCartProduct: (state, action) => {
            const productId = action.payload;
            console.log(productId);
            return state;
        }
    }
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;