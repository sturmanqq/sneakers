import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerList}>
                <p className={styles.footerListTitle}>Поддержка</p>
                <Link to='/footerPage'>Справка</Link>
                <Link to='/footerPage'>Возврат и обмен</Link>
                <Link to='/footerPage'>Доставка</Link>
                <Link to='/footerPage'>Отслеживание</Link>
            </div>
            <div className={styles.footerList}>
                <p className={styles.footerListTitle}>О компании</p>
                <Link to='/footerPage'>О нас</Link>
                <Link to='/footerPage'>Скидки</Link>
                <Link to='/footerPage'>Карьера</Link>
                <Link to='/footerPage'>Акции</Link>
            </div>
            <div className={styles.footerList}>
                <p className={styles.footerListTitle}>Продукты</p>
                <Link to='/footerPage'>Обувь</Link>
                <Link to='/footerPage'>Одежда</Link>
                <Link to='/footerPage'>Распродажа</Link>
            </div>
            <div className={styles.footerList}>
                <p className={styles.footerListTitle}>Подпишитесь на нас</p>
                <div className={styles.footerListSocial}>
                    <img src="images/instagram.png" alt="" />
                    <img src="images/twitter.png" alt="" />
                    <img src="images/vk.png" alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer