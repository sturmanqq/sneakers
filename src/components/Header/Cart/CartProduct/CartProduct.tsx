import { useAppDispatch, useAppSelector } from '../../../../hooks'
import { deleteCartFetch, minusCartFetch, updateCartFetch } from '../../../../redux/cartSlice';
import { minusCartRefetch, plusCartRefetch, deleteCartRefetch } from '../../../../redux/refetch/refetch';
import { cartList } from '../../../../redux/selectors/selectors';
import { IPurchase as ICart } from '../../../../types/types';

import styles from './CartProduct.module.scss'

const CartProduct: React.FC<ICart> = ({id, img, title, price, count}) => {
    const cart = useAppSelector(cartList(id));

    const dispatch = useAppDispatch();

    const handleDeleteCart = () => {
        dispatch(deleteCartRefetch(id));
        dispatch(deleteCartFetch(id));
    }

    const handleMinusCart = () => {
        dispatch(minusCartRefetch(id));

        if(cart && cart.count <= 1) {
            dispatch(deleteCartFetch(id));
        } else {
            dispatch(minusCartFetch({id, img, title, price, count}));
        }
    };

    const handlePlusCart = () => {
        dispatch(plusCartRefetch(id));
        dispatch(updateCartFetch({id, img, title, price, count}))
    }

    return (
        <div className={styles.added}>
                    <img className={styles.addedImg} width={100} height={100} src={img} alt="" />
                    <div className={styles.addedInfo}>
                        <div className={styles.addedInfoName}>{title}</div>
                        <div className={styles.addedInfoPrice}>{price} р.</div>
                        <div className={styles.addedInfoQuantity}>
                            <img onClick={handleMinusCart} src="/images/minus.png" alt="" />
                            <div className={styles.addedInfoQuantityNum}>{count}</div>
                            <img onClick={handlePlusCart} src="/images/plus.png" alt="" />
                        </div>
                    </div>
                    <div onClick={handleDeleteCart} className={styles.addedDelete}>X</div>
                </div>  
    )
}

export default CartProduct;