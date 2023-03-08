import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFavorite {
    id: string,
    img: string,
    title: string,
    price: number,
}

interface IFavorites {
    list: IFavorite[]
}

const initialState: IFavorites = {
    list: [],
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite(state, action: PayloadAction<{id: string, img: string, title: string, price: number}>) {
            const item = state.list.find(item => item.id === action.payload.id )

            if(item) {
                state.list = state.list.filter(item => item.id !== action.payload.id);
            } else {
                state.list.push(action.payload);
            }      
        },
        removeFavorite(state, action: PayloadAction<string>) {
                state.list = state.list.filter(item => item.id !== action.payload)   
        }
    }
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer