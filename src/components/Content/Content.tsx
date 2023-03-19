import { useAppDispatch, useAppSelector } from '../../hooks'
import { productsFetch } from '../../redux/productsSlice'
import styles from './Content.module.scss'
import Products from './Products/Products'
import {useEffect} from 'react'
import Pagination from './Pagination/Pagination'
import { addPageValue } from '../../redux/filter/filter'

const Content: React.FC = () => {
    const products = useAppSelector(state => state.productReducer.list)
    const {searchValue, pageValue} = useAppSelector(state => state.filterReducer)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(productsFetch({searchValue, pageValue}))
    },[searchValue, pageValue]);

    const onChangePage = (page: number) => {
        dispatch(addPageValue(page));
      }; 

    return (
        <div className={styles.content}>
            <div className={styles.contentPre}>
                <div className={styles.contentPreTitle}>
                    <div className={styles.contentPreTitleName}>Все товары</div>
                    <div className={styles.contentPreTitleName}>Обувь</div>
                    <div className={styles.contentPreTitleName}>Одежда</div>
                </div>
                <div className={styles.contentPreFilter}>Фильтры</div>
            </div>
            <div className={styles.contentMain}>
            {products.map((product) => <Products key={product.id}
                                                 img={product.img} 
                                                 title={product.title} 
                                                 id={product.id} 
                                                 price={product.price}
                                                 />)
            }
            </div>
            <Pagination currentPage={pageValue} onChangePage={onChangePage}/>
        </div>
    )
}

export default Content