import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISort {
    title: string,
    titleBd: string,
    sort: string,
}
interface IFilter{
    searchValue: string,
    pageValue: number,
    categoryValue: number,
    sortValue: ISort,
}

const initialState: IFilter = {
    searchValue: '',
    pageValue: 1,
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
        },
        addSort (state, action: PayloadAction<ISort>) {
            state.sortValue = action.payload;

            if(state.sortValue) {
                state.pageValue = 1;
            }
        }
    }
});

export const {addSearchValue, addPageValue, addCategory, addSort} = filterSlice.actions

export default filterSlice.reducer