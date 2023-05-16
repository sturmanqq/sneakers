import React from 'react'
import styles from './Categories.module.scss'
import { filters } from '../../../redux/selectors/selectors';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addCategory } from '../../../redux/filter/filter';

const Categories: React.FC = () => {

    const { categoryValue } = useAppSelector(filters);

    const dispatch = useAppDispatch();

    const onChangeCategory = (index: number) => {
        dispatch(addCategory(index))
    }

    const categories = ['Все товары', 'Обувь', 'Одежда']

    return (
        <div className={styles.category}>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => onChangeCategory(index)} className={categoryValue === index ? styles.categoryNameActive : styles.categoryName}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;