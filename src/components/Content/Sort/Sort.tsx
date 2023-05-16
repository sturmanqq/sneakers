import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { addSort } from '../../../redux/filter/filter'
import { sortList } from '../../../redux/selectors/selectors'
import styles from './Sort.module.scss'
import { ISort } from '../../../types/types'

const Sort: React.FC = () => {
    const sortItems = useAppSelector(sortList);

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

    const sortArr = [
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
                     {sortArr.map((obj, i) => <li key={i} onClick={() => handleSort(obj)} className={styles.sortMenuUlItem}>{obj.title}</li>)}
                     <span onClick={handleClearSort} >очистить фильтры</span>
                </ul>
            </div>}
        </div>
        
    )
}

export default Sort;