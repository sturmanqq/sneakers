import { useAppDispatch } from '../../../../hooks';
import { deleteFavoriteFetch } from '../../../../redux/favoriteSlice';
import { deleteFavoriteRefetch } from '../../../../redux/refetch/refetch';
import styles from './FavoriteProduct.module.scss'

interface IFavorite {
    id: string,
    img: string,
    title: string,
    price: number,
}

const FavoriteProduct: React.FC<IFavorite> = ({id, img, title, price}) => {
    const dispatch = useAppDispatch();

    const hadnleDeleteFavorite = () => {
        dispatch(deleteFavoriteRefetch(id))
        dispatch(deleteFavoriteFetch(id))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperAdded}>
                <img  className={styles.wrapperAddedImg} width={100} height={100} src={img} alt="" />
                <div className={styles.wrapperAddedInfo}>
                    <div className={styles.wrapperAddedInfoName}>{title}</div>
                    <div className={styles.wrapperAddedInfoPrice}>{price} р.</div>
                    <button onClick={hadnleDeleteFavorite} className={styles.wrapperAddedInfoDelete}>Убрать</button>
                 </div>
            </div>
        </div>
    )
}

export default FavoriteProduct;