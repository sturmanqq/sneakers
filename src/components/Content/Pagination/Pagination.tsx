import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';

type PaginationProps = {
    currentPage: number;
    onChangePage: (page: number) => void;
  };

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (

    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );

export default Pagination

// const Pagination: React.FC = () => {
//     const [page, setPage] = useState(1)

//     const product = useAppSelector(state => state.productReducer.list);
//     const dispatch = useAppDispatch();

//     const pageLength = [];

//     for(let i = 1; i <= Math.ceil(product.length / 4); i++) {
//         pageLength.push(i)
//     }

//     const handleSearchValue = () => {
//         dispatch(addPageValue(page))
//     }

//     return(
//         <div>{pageLength.map(item => 
//             <li className={styles.page} key={item} onClick={handleSearchValue}>{item}</li>
//             )}</div>
//     )
// }

// export default Pagination

