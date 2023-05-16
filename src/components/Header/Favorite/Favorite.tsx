import FavoriteProduct from "./FavoriteProduct/FavoriteProduct";
import styles from './Favorite.module.scss';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { favoriteItem, refetch } from "../../../redux/selectors/selectors";
import { useEffect } from "react";
import { favoriteFetch } from "../../../redux/favoriteSlice";
import { IFavoriteWindow } from "../../../types/types";

const Favorite: React.FC<IFavoriteWindow> = ({openFavorite, setOpenFavorite}) => {

    const favoriteItems = useAppSelector(favoriteItem);

    const dispatch = useAppDispatch();

    const { favoriteList } = useAppSelector(refetch);

    useEffect(() => {
        dispatch(favoriteFetch())
    }, [favoriteList]);

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