import { useAppDispatch, useAppSelector } from '../../hooks'
import { productsFetch } from '../../redux/productsSlice'
import styles from './Content.module.scss'
import Products from './Products/Products'
import {useEffect} from 'react'
import Pagination from './Pagination/Pagination'
import { addCategory, addPageValue } from '../../redux/filter/filter'
import Categories from './Category/Categories'
import Sort from './Sort/Sort'
import Skeleton from './Skeleton/Skeleton'
import Search from './Search/Search'

const Content: React.FC = () => {
    const products = useAppSelector(state => state.productReducer.list);
    const { status }  = useAppSelector(state => state.productReducer);

    const { searchValue, pageValue, categoryValue, sortValue } = useAppSelector(state => state.filterReducer);

    const dispatch = useAppDispatch();

    const category = categoryValue > 0 ? `&category=${categoryValue}` : '';
    const sortBy = sortValue.titleBd;
    const order = sortValue.sort; 

    const skeleton = [...new Array(4)].map((_, i) => <Skeleton key={i}/>);

    useEffect(() => {
        dispatch(productsFetch({searchValue, pageValue, category, sortBy, order}))
    },[searchValue, pageValue, category, sortBy, order]);

    const onChangePage = (page: number) => {
        dispatch(addPageValue(page));
      }; 

    const onChangeCategory = (index: number) => {
        dispatch(addCategory(index))
    }

    return (
        <main className={styles.content}>
            <div className={styles.contentFilters}>
                <Categories categoryValue={categoryValue} onChangeCategory={onChangeCategory}/>
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
        </main>
    )
}

export default Content