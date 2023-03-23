import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IItem {
    id: string,
    img: string,
    title: string,
    price: number,
}

interface IRefetch {
    favoriteList: IItem[],   
}

const initialState: IRefetch = {
    favoriteList: [],
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
    }
})

export const { addFavoriteRefetch, deleteFavoriteRefetch } = refetchSlice.actions;

export default refetchSlice.reducer;