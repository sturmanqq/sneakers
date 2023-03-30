import FavoriteProduct from "./FavoriteProduct/FavoriteProduct";
import styles from './Favorite.module.scss';
import { useAppSelector } from "../../../hooks";

interface IFavorite {
    openFavorite: boolean,
    setOpenFavorite: (value: boolean) => void;
}

const Favorite: React.FC<IFavorite> = ({openFavorite, setOpenFavorite}) => {

    const favoriteItems = useAppSelector(state => state.favoriteReducer.list)

    return (
        <div className={`${styles.favorite} ${openFavorite ? styles.active : ''}`}>
                                    <div className={styles.favoriteHead}>
                                        <div className={styles.favoriteHeadTitle}>Избранное</div>
                                        <div onClick={() => setOpenFavorite(false)} className={styles.favoriteHeadClose}>X</div>
                                    </div>
                                    <div className={styles.favoriteTd}>
                                    {favoriteItems.length <= 0 
                                        ? <div className={styles.favoriteTdEmpty}>
                                            Нет избранных товаров
                                        </div>
                                        : favoriteItems.map(item => <FavoriteProduct key={item.id} id={item.id} img={item.img} title={item.title} price={item.price}/>)}
                                    </div> 
                                </div>
    )
};

export default Favorite;