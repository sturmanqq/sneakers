import { PaginationProps } from '../../../types/types';
import styles from './Pagination.module.scss'
import ReactPaginate from 'react-paginate';

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => (

    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={2}
      forcePage={currentPage - 1}
    />
  );

export default Pagination


