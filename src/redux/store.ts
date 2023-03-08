import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productsSlice'
import cartReducer from './cartSlice'
import favoriteReduce from './favoriteSlice'

const store = configureStore({
    reducer: {
        productReducer,
        cartReducer,
        favoriteReduce,
    }

})

export default store 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;