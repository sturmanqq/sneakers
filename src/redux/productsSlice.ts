import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const productsFetch = createAsyncThunk<IProduct[]>(
    'products/productsFetch', 
    async () => {
    const {data} = await axios.get<IProduct[]>('http://localhost:3001/products');

    return data;
})

interface IProduct {
    id: string,
    img: string,
    title: string,
    price: number,
}

const enum Status {
    LOADING = 'Loading',
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
        builder.addCase(productsFetch.rejected, (state, action) => {
            state.status = Status.ERROR;
        });
    }
})

export const {} = productsSlice.actions

export default productsSlice.reducer