import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilter{
    searchValue: string,
    pageValue: number,
    categoryValue: number,
}

const initialState: IFilter = {
    searchValue: '',
    pageValue: 1,
    categoryValue: 0,
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
        },
        addCategory (state, action: PayloadAction<number>) {
            state.categoryValue = action.payload;
            if(state.categoryValue) {
                state.pageValue = 1;
            }
        }
    }
});

export const {addSearchValue, addPageValue, addCategory} = filterSlice.actions

export default filterSlice.reducer