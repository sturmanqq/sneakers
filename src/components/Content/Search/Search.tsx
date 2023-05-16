import { ChangeEvent, useCallback, useState } from 'react';
import styles from './Search.module.scss'
import debounce from 'debounce';
import { useAppDispatch } from '../../../hooks';
import { addSearchValue } from '../../../redux/filter/filter';

const Search: React.FC = () => {
    const [searchValue,setSearchValue ] = useState('');
    
    const dispatch = useAppDispatch();

    const updateSearchValue = useCallback(
        debounce((str: string) => {
          dispatch(addSearchValue(str));
        }, 800),
        [],
      );

    const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        updateSearchValue(e.target.value);  
    }
    
    return (
            <input value={searchValue} 
                   onChange={handleSearchValue} 
                   placeholder='Поиск...' 
                   type="text" 
                   className={styles.search} />
    )
};

export default Search;