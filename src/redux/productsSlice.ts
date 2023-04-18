import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

    export const productsFetch = createAsyncThunk<IProduct[], IFilters, {rejectValue: IError}>(
        'products/productsFetch', 

        async function (params, {rejectWithValue}) {

            try {
                const {searchValue, pageValue, category, sortBy, order} = params;
                const responce = await axios.get(`http://localhost:3001/products?_page=${pageValue}&_limit=8&q=${searchValue}${category}&_sort=${sortBy}&_order=${order}`);
                return responce.data;
            } catch (error) {
                if(axios.isAxiosError(error)) {
                    return rejectWithValue(await error.response as IError);
                };
            };
    });


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

interface IError {
    status: number,
    statusText: string,
};


interface IProductList {
    list: IProduct[],
    status: Status,
    error: IError,
    
}

const initialState: IProductList = {
    list: [],
    status: Status.LOADING,
    error: {
        status: 200,
        statusText: '',
    },
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
            console.log(action.payload)
        });
        builder.addCase(productsFetch.rejected, (state, action) => {

            if(action.payload) {
                state.error = action.payload;
            }
            state.status = Status.ERROR;
        });
    }
})

export const {} = productsSlice.actions

export default productsSlice.reducer 