import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPurchase } from '../types/types';

export const cartFetch = createAsyncThunk<IPurchase[]>(
    'cart/CartFetch',
    async () => {
            const responce = await axios.get<IPurchase[]>('http://localhost:3001/cart');
            return responce.data;
    }
);

export const addCartFetch = createAsyncThunk(
    'addCart/addCartFetch',
    async (params: IPurchase | number) => {
        await axios.post(`http://localhost:3001/cart`, params)
    }
);

export const deleteCartFetch = createAsyncThunk(
    'deleteCart/deleteCartFetch',
    async (id: string) => {
        await axios.delete(`http://localhost:3001/cart/${id}`)
    }
)

export const updateCartFetch = createAsyncThunk(
    'updateCart/updateCartFetch',
    async (params: IPurchase) => {
        const {id, img, title, price, count} = params;
        const newParams = {
            id,
            img,
            title,
            price,
            count: count + 1,
        };
            await axios.put(`http://localhost:3001/cart/${id}`, newParams)
    }
);

export const minusCartFetch = createAsyncThunk(
    'minusCart/minusCartFetch',
    async (params: IPurchase) => {
        const {id, img, title, price, count} = params;
        const newParams = {
            id,
            img,
            title,
            price,
            count: count - 1,
        };
            await axios.put(`http://localhost:3001/cart/${id}`, newParams)
    }
);

interface IPurchases {
    list: IPurchase[],
}
const initialState: IPurchases = {
    list: [],
}
      
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase (cartFetch.pending, (state) => {
        });
        builder.addCase (cartFetch.fulfilled, (state, action) => {
            state.list = action.payload;
        });
        builder.addCase (cartFetch.rejected, (state, action) => {   
        });
    }
})

export default cartSlice.reducer;