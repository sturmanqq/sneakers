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
        // addFavorite(state, action: PayloadAction<{id: string, img: string, title: string, price: number}>) {
        //     const item = state.list.find(item => item.id === action.payload.id )

        //     if(item) {
        //         state.list = state.list.filter(item => item.id !== action.payload.id);
        //     } else {
        //         state.list.push(action.payload);
        //     }      
        // },
        // removeFavorite(state, action: PayloadAction<string>) {
        //         state.list = state.list.filter(item => item.id !== action.payload)   
        // }
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
        // builder.addCase(deleteFavoriteFetch.pending, (state) => {
        //     state.status = Status.LOADING;
        // });
        // builder.addCase(deleteFavoriteFetch.fulfilled, (state, action) => {
        //     state.list = action.payload;
        //     state.status = Status.SUCCES;
        // });
        // builder.addCase(deleteFavoriteFetch.rejected, (state) => {
        //     state.status = Status.ERROR;
        // });
    },
});

export default favoriteSlice.reducer