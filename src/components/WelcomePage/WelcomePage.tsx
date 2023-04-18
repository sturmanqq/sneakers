import { Link } from 'react-router-dom';
import styles from './WelcomePage.module.scss';

const WelcomePage = () => {
    return (
        <div className={styles.welcome}>
            <img src="/images/background.png" alt="" />
            <div className={styles.welcomeCatalog}>
                <Link to='/products' onClick={() => window.scrollTo(0, 0)} className={styles.welcomeCatalogProducts}>Перейти к каталогу</Link>
            </div>
            
        </div>
    )
}

export default WelcomePage;