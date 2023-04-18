import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { addSort } from '../../../redux/filter/filter'
import styles from './Sort.module.scss'

interface ISort {
    title: string,
    titleBd: string,
    sort: string,
}

const Sort: React.FC = () => {
    const sortItems = useAppSelector(state => state.filterReducer.sortValue) 
    const [open, setOpen] = useState(false)

    const dispatch = useAppDispatch();

    const handleSort = (obj: ISort) => {
        dispatch(addSort(obj));
        setOpen(false);
    }

    const handleClearSort = () => {
        dispatch(addSort({title: '', titleBd: '', sort: ''}));
        setOpen(false);
    }

    const sortList = [
        {title: 'популярности', titleBd: 'popularity', sort: 'desc'},
        {title: 'возрастанию цены', titleBd: 'price',sort: 'asc'}, 
        {title: 'убыванию цены', titleBd: 'price',sort: 'desc'},
    ]

    return(
        <div className={styles.sort}>
            <div className={styles.sortName}>
                <div className={styles.sortNameT} onClick={() => setOpen(!open)} >Сортировать по : {sortItems.title}</div>
            </div>
            {open && <div className={styles.sortMenu}>
                <ul className={styles.sortMenuUl}>
                     {sortList.map((obj, i) => <li key={i} onClick={() => handleSort(obj)} className={styles.sortMenuUlItem}>{obj.title}</li>)}
                     <span onClick={handleClearSort} >очистить фильтры</span>
                </ul>
            </div>}
        </div>
        
    )
}

export default Sort