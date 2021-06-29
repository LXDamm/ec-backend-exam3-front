import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        setAuth: (state, action) => {
            state = action.payload;
            return state;
        }
    }
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;