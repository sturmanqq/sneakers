import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface IProduct {
    id: string,
    img: string,
    title: string,
    price: number,
}

// interface IProductList {
//     list: IProduct[],
// }

// const initialState: IProductList = {
//     list: [
        // {id: '1', img: '/productsList/ocr1.jpg', title: 'Adistar ', price: 5300},
        // {id: '2', img: '/productsList/ocr2.jpg', title: 'Ultraboost ', price: 4800},
        // {id: '3', img: '/productsList/ocr3.jpg', title: 'NMD Shoes ', price: 5000},
        // {id: '4', img: '/productsList/ocr4.jpg', title: 'Star Shoes ', price: 6250},
        // {id: '5', img: '/productsList/ocr5.jpg', title: 'Runnig Shoes ', price: 5500},
        // {id: '6', img: '/productsList/ocr6.jpg', title: 'Ultraboost 1.0 ', price: 7100},
        // {id: '7', img: '/productsList/ocr7.jpg', title: 'Superstar ', price: 9300},
        // {id: '8', img: '/productsList/ocr8.jpg', title: 'Lite Racer ', price: 8900},
        // {id: '9', img: '/productsList/ocr9.jpg', title: 'Sport Shorts', price: 4500},
        // {id: '10', img: '/productsList/ocr10.jpg', title: 'Sleeve Tee', price: 4500},
        // {id: '11', img: '/productsList/ocr11.jpg', title: 'Hoodie', price: 4500},
        // {id: '12', img: '/productsList/ocr12.jpg', title: 'Shorts', price: 4500},
//     ],
// }

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers : {
//     },
// })

// export const {} = productsSlice.actions

// export default productsSlice.reducer

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/"}),
    endpoints: (builder) => ({
        getProducts: builder.query<IProduct[], string>({
            query: () => 'products'
        })
    })
})

export const {useGetProductsQuery} = productsApi;