import React from "react";
import style from "./Paginate.module.css";
import ReactPaginate from "react-paginate";

const Paginate = (props) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={props.handlePageClick}
            pageRangeDisplayed={5}
            pageCount={props.pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={style.paginate}
            pageClassName={style.paginateLi}
            activeClassName={style.paginateLiActive}
            previousClassName={style.paginateLiPrevious}
            nextClassName={style.paginateLiNext}
        />
    );
};


export default Paginate;