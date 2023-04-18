import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


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

const enum Status {
    LOADING = 'Loading',
    SUCCES = 'completed',
    ERROR = 'error',
}

interface IFavorite {
    id: string,
    img: string,
    title: string,
    price: number,
}

interface IFavorites {
    list: IFavorite[],
    status: Status,
}

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