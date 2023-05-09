import { useAppDispatch, useAppSelector } from '../../../hooks'
import { addCartFetch, updateCartFetch } from '../../../redux/cartSlice';
import { addFavoriteFetch, deleteFavoriteFetch } from '../../../redux/favoriteSlice';
import { addFavoriteRefetch, addCartRefetch } from '../../../redux/refetch/refetch';
import { cartList, favoriteList } from '../../../redux/selectors/selectors';
import styles from './Products.module.scss'

interface IProduct {
    id: string,
    img: string,
    title: string,
    price: number,
}

const Products: React.FC<IProduct> = ({id, img, title, price}) => {

    const favorite = useAppSelector(favoriteList(id));
    const cart = useAppSelector(cartList(id));

    const props = {id, img, title, price};

    const dispatch = useAppDispatch();

    const handleFavorite = () => {
        dispatch(addFavoriteRefetch({id, img, title, price}));
        
        if(favorite){
            dispatch(deleteFavoriteFetch(id))
        } else {
            dispatch(addFavoriteFetch(({id, img, title, price})))
        }     
    }

    const handleCart = () => {
        dispatch(addCartRefetch({id, img, title, price}))

        if(cart) {
            dispatch(updateCartFetch(cart));    
        } else {
            dispatch(addCartFetch({...props, count: 1}));
        }
        
    }
    
    return (
        <div className={styles.contentProducts}>
            <img onClick={handleFavorite} className={styles.contentProductsFavorite} src={favorite ? '/images/heartclick.png' : "/images/heart.png"} alt="" />
            <img className={styles.contentProductsImg} src={img} alt="" />
            <div className={styles.contentProductsOptions}>
                <div>
                    <p>{title}</p>
                    <div>Цена: {price} р.</div>
                </div>
                <button onClick={handleCart}>Добавить</button>  
            </div>
            
        </div>
    )
}

export default Products