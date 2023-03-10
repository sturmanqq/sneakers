import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productsSlice'
import cartReducer from './cartSlice'
import favoriteReducer from './favoriteSlice'

const store = configureStore({
    reducer: {
        productReducer,
        cartReducer,
        favoriteReducer,
    }

})

export default store 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;