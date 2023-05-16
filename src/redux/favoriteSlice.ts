import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct as IFavorite, IFavorites, Status,  } from '../types/types';


export const favoriteFetch = createAsyncThunk<IFavorite[]>(
    'favorite/favoriteFetch',
    async () => {
        const {data} = await axios.get<IFavorite[]>('http://localhost:3001/favorite');
        return data;
    }
) 

export const addFavoriteFetch = createAsyncThunk(
    'addFavorite/addFavoriteFetch',
    async (params: IFavorite) => {
        await axios.post('http://localhost:3001/favorite', params);
    }
)

export const deleteFavoriteFetch = createAsyncThunk(
    'deleteFavorite/deleteFavoriteFetch',
    async (id: string) => {
        await axios.delete(`http://localhost:3001/favorite/${id}`)
    }
)

const initialState: IFavorites = {
    list: [],
    status: Status.LOADING,
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(favoriteFetch.pending, (state) => {
            state.status = Status.LOADING;
        });
        builder.addCase(favoriteFetch.fulfilled, (state, action) => {
            state.list = action.payload;
            state.status = Status.SUCCES;
        });
        builder.addCase(favoriteFetch.rejected, (state) => {
            state.status = Status.ERROR;
        });
    },
});

export default favoriteSlice.reducer