export const enum Status {
    LOADING = 'loading',
    SUCCES = 'completed',
    ERROR = 'error',
}

export interface IProduct {
    id: string,
    img: string,
    title: string,
    price: number,
};

export interface IPurchase {
    id: string,
    img: string,
    title: string,
    price: number,
    count: number,
};

export interface ISort {
    title: string,
    titleBd: string,
    sort: string,
};

export interface IFilter{
    searchValue: string,
    pageValue: number,
    categoryValue: number,
    sortValue: ISort,
};

export interface IFavorites {
    list: IProduct[],
    status: Status,
}

export interface IFilters {
    searchValue: string,
    pageValue: number,
    category: string,
    sortBy: string,
    order: string,
}

export interface IError {
    status: number,
    statusText: string,
};

export interface IProductList {
    list: IProduct[],
    status: Status,
    error: IError,
    
}

export interface PaginationProps {
    currentPage: number;
    onChangePage: (page: number) => void;
};

export interface ICartWindow {
    openCart: boolean,
    setOpenCart: (value: boolean) => void,
};

export interface IFavoriteWindow {
    openFavorite: boolean,
    setOpenFavorite: (value: boolean) => void;
};