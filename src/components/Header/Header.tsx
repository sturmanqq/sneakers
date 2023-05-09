import {useState, ChangeEvent, useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addSearchValue } from '../../redux/filter/filter'
import styles from './Header.module.scss'
import {debounce} from 'debounce'
import { favoriteFetch } from '../../redux/favoriteSlice'
import { cartFetch } from '../../redux/cartSlice'
import Favorite from './Favorite/Favorite'
import Cart from './Cart/Cart'
import { Link } from 'react-router-dom'
import { refetch, resultCart } from '../../redux/selectors/selectors'

const Header: React.FC = () => {
    const [openFavorite, setOpenFavorite] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const dispatch = useAppDispatch();
    
    const { favoriteList, cartList } = useAppSelector(refetch);

    const result = useAppSelector(resultCart);

    useEffect(() => {
        dispatch(favoriteFetch())
    }, [favoriteList])
 
    useEffect(() => {
        dispatch(cartFetch())
    }, [cartList])

    return (
        <header className={styles.header}>

            {(openCart || openFavorite) && <div  className={styles.headerOverlay}></div>}
                            
            <Favorite openFavorite={openFavorite} setOpenFavorite={setOpenFavorite}/>
            <Cart openCart={openCart} setOpenCart={setOpenCart}/>
            
            <Link to='/' className={styles.headerName}>
                <img src='/images/footshop.jpg' className={styles.headerNameMenuLogo}/>
                <div className={styles.headerNameMenuTitle}>SneakersShop</div>
            </Link>

            <div className={styles.headerPurchases}>
                <div className={styles.headerPurchasesContainer}>
                    <img onClick={() => setOpenCart(true)} src='/images/cart.png' className={styles.headerPurchasesContainerCart}/>
                    <div className={styles.headerPurchasesContainerAmount}>{result} р.</div>
                </div>
                <img onClick={() => setOpenFavorite(true)} src='/images/heart.png' className={styles.headerPurchasesFavourites}/>
            </div>
        </header>
    )
}

export default Header

