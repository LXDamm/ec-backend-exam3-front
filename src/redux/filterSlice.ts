import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        category: undefined
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            return state;
        }
    }
});

export const { setCategory } = filterSlice.actions;
export default filterSlice.reducer;