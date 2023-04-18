import { useAppSelector } from '../../../hooks';
import styles from './ErrorPage.module.scss'


const ErrorPage = () => {
    const {status, statusText} = useAppSelector(state => state.productReducer.error);

    return (
        <div className={styles.error}>
            <div className={styles.errorStatus}>{status}</div>
            <div className={styles.errorText}>{statusText}</div>
        </div>
    )
};

export default ErrorPage;