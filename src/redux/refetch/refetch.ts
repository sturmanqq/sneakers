import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct as IItem, IPurchase } from '../../types/types';

interface IRefetch {
    favoriteList: IItem[], 
    cartList: IPurchase[], 

}

const initialState: IRefetch = {
    favoriteList: [],
    cartList: [],
}

export const refetchSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addFavoriteRefetch (state, action) {
            const item = state.favoriteList.find(item => item.id === action.payload.id )

            if(item) {
                state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload.id);
            } else {
                state.favoriteList.push(action.payload);
            }     
        },
        deleteFavoriteRefetch (state, action) {
            state.favoriteList = state.favoriteList.filter(item => item.id !== action.payload)
        },
        addCartRefetch(state, action: PayloadAction<{id: string, img: string, title: string, price: number, count?: number}>) {
            const idItem = state.cartList.find(item => item.id === action.payload.id )

            if(idItem){
                idItem.count++;
            } else {
                state.cartList.push({...action.payload, count: 1});
            }
        },
        deleteCartRefetch(state, action: PayloadAction<string>){
            state.cartList = state.cartList.filter((item) => item.id !== action.payload)
        },
        plusCartRefetch(state, action: PayloadAction<string>) {
            const item = state.cartList.find(item => item.id === action.payload)

            if(item) {
                item.count++
            }  
        },
        minusCartRefetch(state, action: PayloadAction<string>) {
            const item = state.cartList.find(item => item.id === action.payload)

            if(item) {
                item.count <= 1 ? state.cartList = state.cartList.filter((item) => item.id !== action.payload) : item.count--;
            }          
        }
    }
})

export const { addFavoriteRefetch, deleteFavoriteRefetch, addCartRefetch, deleteCartRefetch, plusCartRefetch, minusCartRefetch } = refetchSlice.actions;

export default refetchSlice.reducer;