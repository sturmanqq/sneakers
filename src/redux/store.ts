import { configureStore } from "@reduxjs/toolkit";
// import productReducer from './productsSlice'
import cartReducer from './cartSlice'
import favoriteReducer from './favoriteSlice'
import { productsApi } from "./productsSlice";

const store = configureStore({
    reducer: {
        // productReducer,
        cartReducer,
        favoriteReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

export default store 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;