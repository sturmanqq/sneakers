import {useState, ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { addSearchValue } from '../../redux/filter/filter'
import Cart from './Cart/Cart'
import Favorite from './Favorite/Favorite'
import styles from './Header.module.scss'
import {debounce} from 'debounce'

const Header: React.FC = () => {
    const [openFavorite, setOpenFavorite] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [searchValue,setSearchValue ] = useState('');

    const dispatch = useAppDispatch();

    const itemsC = useAppSelector(state => state.cartReducer.list)
    const itemsF = useAppSelector(state => state.favoriteReducer.list)

    const result = itemsC.reduce((sum, item) => sum + (item.price * item.count), 0)
    const amount = itemsC.reduce((sum, item) => sum + item.count, 0)
    
    

    const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        dispatch(addSearchValue(e.target.value));  
    }
    
    return (
        <div className={styles.header}>
            {openFavorite && <div  className={styles.headerOverlay}>
                                <div className={styles.headerOverlayFavorite}>
                                    <div className={styles.headerOverlayFavoriteHead}>
                                        <div className={styles.headerOverlayFavoriteHeadTitle}>Избранное</div>
                                        <div onClick={() => setOpenFavorite(false)} className={styles.headerOverlayFavoriteHeadClose}>X</div>
                                    </div>
                                    <div className={styles.headerOverlayFavoriteTd}>
                                    {itemsF.length <= 0 
                                        ? <div className={styles.headerOverlayFavoriteTdEmpty}>
                                            Нет избранных товаров
                                        </div>
                                        : itemsF.map(item => <Favorite key={item.id} id={item.id} img={item.img} title={item.title} price={item.price}/>)}
                                    </div> 
                                </div>
                            </div>}

            {openCart && <div className={styles.headerOverlay}>
                            <div className={styles.headerOverlayCart}>
                                <div className={styles.headerOverlayCartHead}>
                                    <div className={styles.headerOverlayCartHeadTitle}>Корзина</div>
                                    <div onClick={() => setOpenCart(false)} className={styles.headerOverlayCartHeadClose}>X</div>
                                </div>
                                <div className={styles.headerOverlayCartOverflow}>
                                {itemsC.length <= 0 
                                    ?<div className={styles.headerOverlayCartOverflowEmpty}>
                                        <div>Корзина пуста...</div>
                                    </div> 
                                    : itemsC.map(item => <Cart key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} count={item.count}/>)}
                                </div>        
                                <div className={styles.headerOverlayCartBuy}>
                                    <div className={styles.headerOverlayCartBuyCort}>Общая цена: {result} р.</div>
                                    <button className={styles.haedreOverlayCartBuyOrder}>Оформить</button>
                                </div>
                            </div>
                         </div>
            }

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

