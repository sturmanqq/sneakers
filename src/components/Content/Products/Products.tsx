import { useAppDispatch, useAppSelector } from '../../../hooks'
import { addProduct } from '../../../redux/cartSlice';
import { addFavorite } from '../../../redux/favoriteSlice';
import styles from './Products.module.scss'

interface IProduct {
    id: string,
    img: string,
    title: string,
    price: number,
}

const Products: React.FC<IProduct> = ({id, img, title, price}) => {
    const favorite = useAppSelector(state => state.favoriteReduce.list.find(item => item.id === id))

    const dispatch = useAppDispatch();

    const handleAddFavorite = () => {
        dispatch(addFavorite({id, img, title, price}))
    }

    return (
        <div className={styles.contentProducts}>
            <img onClick={handleAddFavorite} className={styles.contentProductsFavorite} src={favorite ? '/images/heartclick.png' : "/images/heart.png"} alt="" />
            <img className={styles.contentProductsImg} src={img} alt="" />
            <div className={styles.contentProductsOptions}>
                <div>
                    <p>{title}</p>
                    <div>Цена: {price} р.</div>
                </div>
                <button onClick={() => dispatch(addProduct({id, img, title, price}))}>Добавить</button>  
            </div>
            
        </div>
    )
}

export default Products