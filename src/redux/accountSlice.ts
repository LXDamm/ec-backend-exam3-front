import { createSlice } from '@reduxjs/toolkit';

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        account: null
    },
    reducers: {
        setAccount: (state, action) => {
            state.account = action.payload;
        }
    }
});

export const { setAccount } = accountSlice.actions;
export default accountSlice.reducer;