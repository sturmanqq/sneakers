import { useAppDispatch, useAppSelector } from '../../hooks'
import { useGetProductsQuery } from '../../redux/productsSlice'
import styles from './Content.module.scss'
import Products from './Products/Products'

const Content: React.FC = () => {
    // const products = useAppSelector(state => state.productReducer.list)
    const {data = []} = useGetProductsQuery('');

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
            {data.map((product) => <Products key={product.id}
                                                 img={product.img} 
                                                 title={product.title} 
                                                 id={product.id} 
                                                 price={product.price}
                                                 />)
            }
            </div>
        </div>
    )
}

export default Content