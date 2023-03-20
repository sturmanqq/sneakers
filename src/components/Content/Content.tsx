import { useAppDispatch, useAppSelector } from '../../hooks'
import { productsFetch } from '../../redux/productsSlice'
import styles from './Content.module.scss'
import Products from './Products/Products'
import {useEffect} from 'react'
import Pagination from './Pagination/Pagination'
import { addCategory, addPageValue } from '../../redux/filter/filter'
import Categories from './Category/Categories'
import Sort from './Sort/Sort'

const Content: React.FC = () => {
    const products = useAppSelector(state => state.productReducer.list)
    const {searchValue, pageValue, categoryValue, sortValue} = useAppSelector(state => state.filterReducer)

    const dispatch = useAppDispatch();

    const category = categoryValue > 0 ? `&category=${categoryValue}` : '';
    const sortBy = sortValue.titleBd;
    const order = sortValue.sort; 
    
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
        <div className={styles.content}>
            <div className={styles.contentFilters}>
                <Categories categoryValue={categoryValue} onChangeCategory={onChangeCategory}/>
                <Sort/>
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