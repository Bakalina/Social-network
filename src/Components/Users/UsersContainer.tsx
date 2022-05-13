import React, {FC, useEffect} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleIsFollowingProgress,
    requestUsers
} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../Redux/usersSelectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../Redux/reduxStore";

type UserAPIPropsType = {
    totalUsersCount: number,
    pageSize: number,
    users: UserType[],
    followingInProgress: boolean,
    unFollow: (id: number) => void,
    follow: (id: number) => void,
    currentPage: number,
    isFetching: boolean,
    requestUsers: (currentPage: number, pageSize: number) => void
}

const UsersAPI: FC<UserAPIPropsType> = ({currentPage, pageSize, requestUsers, isFetching,
    users, unFollow, follow, totalUsersCount, followingInProgress}) => {

    useEffect(() => {
        requestUsers(currentPage, pageSize);
    },[]);

    const onPageChanged = (pageNumber: number) => {
        requestUsers(pageNumber, pageSize);
    };
    return <>
        { isFetching ? <Preloader /> : null }
        <Users
            users={users}
            unFollow={unFollow}
            follow={follow}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            onPageChange={onPageChanged}
            followingInProgress={followingInProgress}
        />
    </>;
};

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        requestUsers
    })
)(UsersAPI);