import React, {useEffect} from "react";
import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import noImage from "./../../image/no_image_user.jpg";
import Paginate from "../common/Pagination/Paginate";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/usersSelectors";
import {follow, requestUsers, unFollow} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";


const Users = () => {

    const users = useSelector(getUsers);
    const pageSize = useSelector(getPageSize);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const followingInProgress = useSelector(getFollowingInProgress);
    const currentPage = useSelector(getCurrentPage);
    const isFetching = useSelector(getIsFetching);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize));
    },[]);

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize));
    };

    const pageCount = Math.ceil(totalUsersCount / pageSize);

    const handlePageClick = ({selected}: any) => {
        onPageChanged(selected+1);
    };

    return <>
        { isFetching ? <Preloader /> : null }
        <div className={style.users}>
            {users.map(el =>
                <div className={style.card} key={el.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + el.id}>
                                <img width='70px' alt='image'
                                    src={el.photos.small != null ? el.photos.small : noImage}/>
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button disabled={followingInProgress} onClick={()=> {
                                    dispatch(unFollow(el.id));
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress} onClick={() => {
                                    dispatch(follow(el.id));
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
        <Paginate handlePageClick={handlePageClick} pageCount={pageCount} />
    </>;

};

export default Users;

