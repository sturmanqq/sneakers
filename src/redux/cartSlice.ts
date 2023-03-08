import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPurchase {
    id: string,
    img: string,
    title: string,
    price: number,
    count: number,
}

interface IPurchases {
    list: IPurchase[]
}
const initialState: IPurchases = {
    list: [],
}
      
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<{id: string, img: string, title: string, price: number, count?: number}>) {
            const idItem = state.list.find(item => item.id === action.payload.id )

            if(idItem){
                idItem.count++;
            } else {
                state.list.push({...action.payload, count: 1});
            }
        },
        removeProduct(state, action: PayloadAction<string>){
            state.list = state.list.filter((item) => item.id !== action.payload)
        },
        plusProduct(state, action: PayloadAction<string>) {
            const item = state.list.find(item => item.id === action.payload)

            if(item) {
                item.count++
            }  
        },
        minusProduct(state, action: PayloadAction<string>) {
            const item = state.list.find(item => item.id === action.payload)

            if(item) {
                item.count <= 1 ? state.list = state.list.filter((item) => item.id !== action.payload) : item.count--;
            }          
        }
    }
})

export const {addProduct, removeProduct, plusProduct, minusProduct} = cartSlice.actions;

export default cartSlice.reducer;