import styles from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <ul className={styles.footerUl}>
                <li className={styles.footerUlTitle}>Поддержка</li>
                <li>Справка</li>
                <li>Возврат и обмен</li>
                <li>Доставка</li>
                <li>Отслеживание</li>
            </ul>
            <ul className={styles.footerUl}>
                <li className={styles.footerUlTitle}>О компании</li>
                <li>О нас</li>
                <li>Скидки</li>
                <li>Карьера</li>
                <li>Акции</li>
            </ul>
            <ul className={styles.footerUl}>
                <li className={styles.footerUlTitle}>Продукты</li>
                <li>Обувь</li>
                <li>Одежда</li>
                <li>Распродажа</li>
            </ul>
            <div className={styles.footerUl}>
                <p className={styles.footerUlTitle}>Подпишитесь на нас</p>
                <div className={styles.footerUlSocial}>
                    <img src="images/instagram.png" alt="" />
                    <img src="images/twitter.png" alt="" />
                    <img src="images/vk.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer