import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { filters, productList } from '../../../redux/selectors/selectors';
import Products from '../Products/Products';
import Skeleton from '../Skeleton/Skeleton';
import styles from './Pagination.module.scss'
import { addPageCount } from '../../../redux/filter/filter';

const Pagination: React.FC = () => {
  const [limit] = useState(8);

  const { pageCount } = useAppSelector(filters);
  const dispatch = useAppDispatch();

  const skeleton = [...new Array(8)].map((_, i) => <Skeleton key={i}/>);

  const { list: products, status } = useAppSelector(productList);
  console.log(products)

  const lastIndex = pageCount * limit;
  const firstIndex = lastIndex - limit;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(products.length / limit); i++) {
    pageNumbers.push(i);
  }

  const handlePageCount = (item: number) => {
    dispatch(addPageCount(item));
    window.scrollTo(0, 0);
  }

    return (

      <div className={styles.main}>
        <div className={styles.content}>
          { status === 'loading' ? skeleton : currentProducts.map((product) => <Products 
                                                  key={product.id}
                                                  img={product.img} 
                                                  title={product.title} 
                                                  id={product.id} 
                                                  price={product.price}
                                                            />)
                          }
        </div>
       <div className={styles.root}>
          { pageNumbers.map((item) => 
            <li className={pageCount === item ? styles.active : ''} key={item} onClick={() => handlePageCount(item)}>{item}</li>
          ) }
       </div>
      </div>
    )
    
};

export default Pagination


