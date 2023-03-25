import { useAppDispatch } from '../../../hooks'
import { deleteCartFetch } from '../../../redux/cartSlice';
import { minusCartRefetch, plusCartRefetch, deleteCartRefetch } from '../../../redux/refetch/refetch';

import styles from './Cart.module.scss'

interface ICart {
    id: string,
    img: string,
    title: string,
    price: number,
    count: number,
}

const Cart: React.FC<ICart> = ({id, img, title, price, count}) => {

    const dispatch = useAppDispatch();

    const handleDeleteCart = () => {
        dispatch(deleteCartRefetch(id));
        dispatch(deleteCartFetch(id));
    }

    return (
        <div className={styles.added}>
                    <img className={styles.addedImg} width={100} height={100} src={img} alt="" />
                    <div className={styles.addedInfo}>
                        <div className={styles.addedInfoName}>{title}</div>
                        <div className={styles.addedInfoPrice}>{price} р.</div>
                        <div className={styles.addedInfoQuantity}>
                            <img onClick={() => dispatch(minusCartRefetch(id))} src="/images/minus.png" alt="" />
                            <div className={styles.addedInfoQuantityNum}>{count}</div>
                            <img onClick={() => dispatch(plusCartRefetch(id))} src="/images/plus.png" alt="" />
                        </div>
                    </div>
                    <div onClick={handleDeleteCart} className={styles.addedDelete}>X</div>
                </div>  
    )
}

export default Cart;