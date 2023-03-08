import { useAppDispatch } from '../../../hooks';
import { removeFavorite } from '../../../redux/favoriteSlice';
import styles from './Favorite.module.scss'

interface IFavorite {
    id: string,
    img: string,
    title: string,
    price: number,
}

const Favorite: React.FC<IFavorite> = ({id, img, title, price}) => {
    const dispatch = useAppDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperAdded}>
                <img  className={styles.wrapperAddedImg} width={100} height={100} src={img} alt="" />
                <div className={styles.wrapperAddedInfo}>
                    <div className={styles.wrapperAddedInfoName}>{title}</div>
                    <div className={styles.wrapperAddedInfoPrice}>{price} р.</div>
                    <button onClick={() => dispatch(removeFavorite(id))} className={styles.wrapperAddedInfoDelete}>Убрать</button>
                 </div>
            </div>
        </div>
    )
}

export default Favorite;