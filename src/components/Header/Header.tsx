import {useState, ChangeEvent, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addSearchValue } from '../../redux/filter/filter'
import styles from './Header.module.scss'
import {debounce} from 'debounce'
import { favoriteFetch } from '../../redux/favoriteSlice'
import { cartFetch } from '../../redux/cartSlice'
import Favorite from './Favorite/Favorite'
import Cart from './Cart/Cart'

const Header: React.FC = () => {
    const [openFavorite, setOpenFavorite] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [searchValue,setSearchValue ] = useState('');

    const dispatch = useAppDispatch();

    const itemsC = useAppSelector(state => state.cartReducer.list)
    
    const { favoriteList, cartList } = useAppSelector(state => state.refetchReducer)

    const amount = itemsC.reduce((sum, item) => sum + item.count, 0)
    
    const updateSearchValue = useCallback(
        debounce((str: string) => {
          dispatch(addSearchValue(str));
        }, 800),
        [],
      );

    const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        updateSearchValue(e.target.value);  
    }

    useEffect(() => {
        dispatch(favoriteFetch())
    }, [favoriteList])
 
    useEffect(() => {
        dispatch(cartFetch())
    }, [cartList])

    return (
        <div className={styles.header}>

            {(openCart || openFavorite) && <div  className={styles.headerOverlay}>     
                            </div>}
                            
            <Favorite openFavorite={openFavorite} setOpenFavorite={setOpenFavorite}/>
            <Cart openCart={openCart} setOpenCart={setOpenCart}/>

            <div className={styles.headerName}>
                <img src='/images/footshop.jpg' className={styles.headerNameLogo}/>
                <div className={styles.headerNameTitle}>SneakersShop</div>
            </div>

            <input value={searchValue} onChange={handleSearchValue} placeholder='Поиск...' type="text" className={styles.headerSearch} />

            <div className={styles.headerPurchases}>
                <div className={styles.headerPurchasesContainer}>
                    <img onClick={() => setOpenCart(true)} src='/images/cart.png' className={styles.headerPurchasesContainerCart}/>
                    <div className={styles.headerPurchasesContainerAmount}>{amount}</div>
                </div>
                <img onClick={() => setOpenFavorite(true)} src='/images/heart.png' className={styles.headerPurchasesFavourites}/>
            </div>
        </div>
    )
}

export default Header

