import React, {FC} from "react";
import style from "./Paginate.module.css";
import ReactPaginate from "react-paginate";

type PaginatePropsType = {
    pageCount: number,
    handlePageClick: (selected: any) => void,
}

const Paginate: FC<PaginatePropsType> = ({handlePageClick, pageCount}) => {
    return (
        <ReactPaginate
            marginPagesDisplayed={10}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            containerClassName={style.paginate}
            pageClassName={style.paginateLi}
            activeClassName={style.paginateLiActive}
            previousClassName={style.paginateLiPrevious}
            nextClassName={style.paginateLiNext}/>
    );
};


export default Paginate;