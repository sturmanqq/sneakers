import styles from './Categories.module.scss'

interface ICategories {
    categoryValue: number,
    onChangeCategory: (index: number) => void,
}

const Categories: React.FC<ICategories> = ({categoryValue, onChangeCategory}) => {

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