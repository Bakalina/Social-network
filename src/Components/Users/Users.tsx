import React, {FC} from "react";
import style from './Users.module.css';
import {NavLink} from "react-router-dom";
import noImage from "./../../image/no_image_user.jpg";
import Paginate from "../common/Pagination/Paginate";
import {PhotosType} from "../../types/types";

type UsersType = {
    name: string,
    id: number,
    photos: PhotosType,
    status: string | null,
    followed: boolean
}

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChange: (pageNumber: number) => void,
    users: UsersType[],
    followingInProgress: boolean,
    unFollow: (id: number) => void,
    follow: (id: number) => void
}

const Users: FC<UsersPropsType> = ({totalUsersCount, pageSize, onPageChange, users, followingInProgress, unFollow, follow}) => {

    const pageCount = Math.ceil(totalUsersCount / pageSize);

    const handlePageClick = ({selected}: any) => {
        onPageChange(selected+1);
    };

    return <>
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
                                    unFollow(el.id);
                                }}>Unfollow</button>
                                : <button disabled={followingInProgress} onClick={() => {
                                    follow(el.id);
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

