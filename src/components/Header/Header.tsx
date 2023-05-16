import {useState } from 'react'
import { useAppSelector } from '../../hooks'
import styles from './Header.module.scss'
import Favorite from './Favorite/Favorite'
import Cart from './Cart/Cart'
import { Link } from 'react-router-dom'
import { resultCart } from '../../redux/selectors/selectors'

const Header: React.FC = () => {
    const [openFavorite, setOpenFavorite] = useState(false);
    const [openCart, setOpenCart] = useState(false);

    const result = useAppSelector(resultCart);

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

