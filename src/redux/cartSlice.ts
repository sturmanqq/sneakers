import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const cartFetch = createAsyncThunk<IPurchase[]>(
    'cart/CartFetch',
    async () => {
        const { data } = await axios.get<IPurchase[]>('http://localhost:3001/cart');
        return data;
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

interface IPurchase {
    id: string,
    img: string,
    title: string,
    price: number,
    count: number,
}

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
        builder.addCase (cartFetch.rejected, (state) => {
            
        });
    }
})

export default cartSlice.reducer;