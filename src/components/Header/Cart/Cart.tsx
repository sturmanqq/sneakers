import { useAppSelector } from '../../../hooks';
import styles from './Cart.module.scss'
import CartProduct from './CartProduct/CartProduct';

interface ICart {
    openCart: boolean,
    setOpenCart: (value: boolean) => void,
}

const Cart: React.FC<ICart> = ({openCart, setOpenCart}) => {

    const cartItems = useAppSelector(state => state.cartReducer.list)

    const result = cartItems.reduce((sum, item) => sum + (item.price * item.count), 0)

    return (
        <div className={`${styles.cart} ${openCart ? styles.active : ''}`}>
                                <div className={styles.cartHead}>
                                    <div className={styles.cartHeadTitle}>Корзина</div>
                                    <div onClick={() => setOpenCart(false)} className={styles.cartHeadClose}>X</div>
                                </div>
                                <div className={styles.cartOverflow}>
                                {cartItems.length <= 0 
                                    ?<div className={styles.cartOverflowEmpty}>
                                        <div>Корзина пуста...</div>
                                    </div> 
                                    : cartItems.map(item => <CartProduct key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} count={item.count}/>)}
                                </div>        
                                <div className={styles.cartBuy}>
                                    <div className={styles.cartBuyCort}>Общая цена: {result} р.</div>
                                    <button className={styles.haedreOverlayCartBuyOrder}>Оформить</button>
                                </div>
                            </div>
    )
}

export default Cart;