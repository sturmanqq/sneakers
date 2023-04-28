import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerList}>
                <div className={styles.footerListName}>
                    <p className={styles.footerListNameTitle}>Поддержка</p>
                    <Link to='/footerPage'>Справка</Link>
                    <Link to='/footerPage'>Возврат и обмен</Link>
                    <Link to='/footerPage'>Доставка</Link>
                    <Link to='/footerPage'>Отслеживание</Link>
                </div>
                <div className={styles.footerListName}>
                    <p className={styles.footerListNameTitle}>О компании</p>
                    <Link to='/footerPage'>О нас</Link>
                    <Link to='/footerPage'>Скидки</Link>
                    <Link to='/footerPage'>Карьера</Link>
                    <Link to='/footerPage'>Акции</Link>
                </div>
                <div className={styles.footerListName}>
                    <p className={styles.footerListNameTitle}>Продукты</p>
                    <Link to='/footerPage'>Обувь</Link>
                    <Link to='/footerPage'>Одежда</Link>
                    <Link to='/footerPage'>Распродажа</Link>
                </div>
            </div>
            <div className={styles.footerFollow}>
                <p className={styles.footerFollowTitle}>Подпишитесь на нас</p>
                <div className={styles.footerFollowSocial}>
                    <img src="images/instagram.png" alt="" />
                    <img src="images/twitter.png" alt="" />
                    <img src="images/vk.png" alt="" />
                </div>
            </div> 
        </footer>
    )
}

export default Footer