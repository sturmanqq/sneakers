import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productsSlice';
import cartReducer from './cartSlice';
import favoriteReducer from './favoriteSlice';
import filterReducer from './filter/filter'
import refetchReducer from './refetch/refetch'

const store = configureStore({
    reducer: {
        productReducer,
        cartReducer,
        favoriteReducer,
        filterReducer,
        refetchReducer,
    }

})

export default store 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;