import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilter{
    searchValue: string,
    pageValue: number,
}

const initialState: IFilter = {
    searchValue: '',
    pageValue: 1,
}

export const filterSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addSearchValue (state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
            if(state.searchValue) {
                state.pageValue = 1;
            }
        },
        addPageValue (state, action: PayloadAction<number>) {
            state.pageValue = action.payload;
        }
    }
});

export const {addSearchValue, addPageValue} = filterSlice.actions

export default filterSlice.reducer