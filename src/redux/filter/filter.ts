import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilter{
    searchValue: string,
}

const initialState: IFilter = {
    searchValue: '',
}

export const filterSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addSearchValue (state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
    }
});

export const {addSearchValue} = filterSlice.actions

export default filterSlice.reducer