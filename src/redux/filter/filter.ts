import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilter, ISort } from "../../types/types";

const initialState: IFilter = {
    pageCount: 1,
    searchValue: '',
    categoryValue: 0,
    sortValue: {
        title: '',
        titleBd: '',
        sort: '',
    }
}

export const filterSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addPageCount (state, action: PayloadAction<number>) {
            state.pageCount = action.payload;
        },
        addSearchValue (state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
            if(state.searchValue) state.pageCount = 1;
        },
        addCategory (state, action: PayloadAction<number>) {
            state.categoryValue = action.payload;
            if(state.categoryValue) state.pageCount = 1;
        },
        addSort (state, action: PayloadAction<ISort>) {
            state.sortValue = action.payload;
            if(state.sortValue) state.pageCount = 1;
        },
    }
});

export const {addSearchValue, addCategory, addSort, addPageCount} = filterSlice.actions

export default filterSlice.reducer