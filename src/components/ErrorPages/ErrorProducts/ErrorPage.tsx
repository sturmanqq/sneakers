import { useAppSelector } from '../../../hooks';
import { errorStatus } from '../../../redux/selectors/selectors';
import styles from './ErrorPage.module.scss'


const ErrorPage = () => {
    const {status, statusText} = useAppSelector(errorStatus);

    return (
        <div className={styles.error}>
            <div className={styles.errorStatus}>{status}</div>
            <div className={styles.errorText}>{statusText}</div>
        </div>
    )
};

export default ErrorPage;