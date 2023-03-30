import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const productsFetch = createAsyncThunk<IProduct[], IFilters>(
    'products/productsFetch', 
    async (params) => {
        const {searchValue, pageValue, category, sortBy, order} = params;
        const {data} = await axios.get<IProduct[]>(`http://localhost:3001/products?_page=${pageValue}&_limit=4&q=${searchValue}${category}&_sort=${sortBy}&_order=${order}`);
        return data;
})

interface IFilters {
    searchValue: string,
    pageValue: number,
    category: string,
    sortBy: string,
    order: string,
}
interface IProduct {
    id: string,
    img: string,
    title: string,
    price: number,
}

const enum Status {
    LOADING = 'loading',
    SUCCES = 'completed',
    ERROR = 'error',
}

interface IProductList {
    list: IProduct[],
    status: Status,
}

const initialState: IProductList = {
    list: [],
    status: Status.LOADING,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers : {
    },
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = Status.SUCCES;
        });
        builder.addCase(productsFetch.rejected, (state) => {
            state.status = Status.ERROR;
        });
    }
})

export const {} = productsSlice.actions

export default productsSlice.reducer