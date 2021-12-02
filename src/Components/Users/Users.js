import React from "react";
import style from './Users.module.css'
import ReactPaginate from 'react-paginate';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        const handlePageClick = ({selected}) => {
             props.onPageChange(selected+1)
        }

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
                                         : 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/>
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '738a7b98-0701-4aab-b063-c2ec324fb243'
                                        }
                                    })
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.unFollow(el.id)
                                            }
                                        })
                                    props.unFollow(el.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': '738a7b98-0701-4aab-b063-c2ec324fb243'
                                        }
                                    })
                                        .then(response => {
                                           if(response.data.resultCode === 0) {
                                               props.follow(el.id)
                                           }
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.country'}</div>
                            <div>{'el.location.city'}</div>
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
        </>

}

export default Users;

