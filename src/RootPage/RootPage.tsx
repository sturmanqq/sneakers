import { Outlet } from 'react-router-dom';
import styles from './RootPage.module.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const RootPage = () => {

    return (
        <div className={styles.app}>
            <Header />
            <Outlet/> 
            <Footer />
        </div>
    )
};

export default RootPage;