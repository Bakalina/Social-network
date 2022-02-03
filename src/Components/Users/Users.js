import React from "react";
import style from './Users.module.css';
import ReactPaginate from 'react-paginate';
import {NavLink} from "react-router-dom";
import noImage from "./../../image/no_image_user.jpg";

const Users = (props) => {

    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const handlePageClick = ({selected}) => {
        props.onPageChange(selected+1);
    };

    return <>
        <div className={style.users}>
            {props.users.map(el =>
                <div className={style.card} key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img width='70px' alt='image'
                                    src={el.photos.small != null
                                        ? el.photos.small
                                        : noImage}/>
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button disabled={props.followingInProgress} onClick={()=> {
                                    props.unFollow(el.id);
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress} onClick={() => {
                                    props.follow(el.id);
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>name: <b>{el.name}</b></div>
                            <div>status: <b>{el.status}</b></div>
                        </span>
                    </span>
                </div>)}
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            containerClassName={style.paginate}
            pageClassName={style.paginateLi}
            activeClassName={style.paginateLiActive}
            previousClassName={style.paginateLiPrevious}
            nextClassName={style.paginateLiNext}
        />
    </>;

};

export default Users;

