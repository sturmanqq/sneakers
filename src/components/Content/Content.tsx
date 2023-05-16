import { useAppDispatch, useAppSelector } from '../../hooks'
import { productsFetch } from '../../redux/productsSlice'
import styles from './Content.module.scss'
import Products from './Products/Products'
import {useEffect} from 'react'
import Pagination from './Pagination/Pagination'
import { addPageValue } from '../../redux/filter/filter'
import Categories from './Category/Categories'
import Sort from './Sort/Sort'
import Skeleton from './Skeleton/Skeleton'
import Search from './Search/Search'
import ErrorPage from '../ErrorPages/ErrorProducts/ErrorPage'
import { filters, productList } from '../../redux/selectors/selectors'

const Content: React.FC = () => {
    
    const { list: products, status } = useAppSelector(productList);

    const { searchValue, pageValue, categoryValue, sortValue } = useAppSelector(filters);

    const dispatch = useAppDispatch();

    const category = categoryValue > 0 ? `&category=${categoryValue}` : '';
    const sortBy = sortValue.titleBd;
    const order = sortValue.sort; 

    const skeleton = [...new Array(8)].map((_, i) => <Skeleton key={i}/>);

    useEffect(() => {
        dispatch(productsFetch({searchValue, pageValue, category, sortBy, order}))
    },[searchValue, pageValue, category, sortBy, order]);

    const onChangePage = (page: number) => {
        dispatch(addPageValue(page));
      }; 

    return (
        <main className={styles.content}>
            {status === 'error' ? 
                <ErrorPage/> 
                : <div>
                        <div className={styles.contentFilters}>
                            <Categories/>
                            <Search/>
                            <Sort/>
                        </div>
                        <div className={styles.contentMain}>
                        {status === 'loading' ? skeleton : products.map((product) => <Products 
                                                                key={product.id}
                                                                img={product.img} 
                                                                title={product.title} 
                                                                id={product.id} 
                                                                price={product.price}
                                                            />)
                        }
                        </div>
                        <Pagination currentPage={pageValue} onChangePage={onChangePage}/>
                    </div>}
            </main>
    )
}

export default Content