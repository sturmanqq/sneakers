import { useAppDispatch, useAppSelector } from '../../hooks'
import { productsFetch } from '../../redux/productsSlice'
import styles from './Content.module.scss'
import {useEffect} from 'react'
import Pagination from './Pagination/Pagination'
import Categories from './Category/Categories'
import Sort from './Sort/Sort'
import Search from './Search/Search'
import ErrorPage from '../ErrorPages/ErrorProducts/ErrorPage'
import { filters, productList } from '../../redux/selectors/selectors'

const Content: React.FC = () => {
    
    const { status } = useAppSelector(productList);

    const { searchValue, categoryValue, sortValue } = useAppSelector(filters);

    const dispatch = useAppDispatch();

    const category = categoryValue > 0 ? `&category=${categoryValue}` : '';
    const sortBy = sortValue.titleBd;
    const order = sortValue.sort; 

    useEffect(() => {
        dispatch(productsFetch({searchValue, category, sortBy, order}))
    },[searchValue, category, sortBy, order]); 

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
                        <Pagination/>
                    </div>}
            </main>
    )
}

export default Content