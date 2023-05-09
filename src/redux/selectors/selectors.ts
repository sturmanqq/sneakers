import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const cartItem = (state: RootState) => state.cartReducer.list;

export const favoriteItem = (state: RootState) => state.favoriteReducer.list

export const sortList = (state: RootState) => state.filterReducer.sortValue;

export const productList = (state: RootState) => state.productReducer;

export const refetch = (state: RootState) => state.refetchReducer;

export const favoriteList = (id: string) => (state: RootState) => 
    state.favoriteReducer.list.find(item => item.id === id);

export const cartList = (id: string) => (state: RootState) => 
    state.cartReducer.list.find(item => item.id === id);

export const resultCart = createSelector(
    [cartItem], 
    items => items.reduce((sum, item) => sum + (item.price * item.count), 0)
);

