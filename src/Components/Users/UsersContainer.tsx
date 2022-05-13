import React, {FC, useEffect} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    unFollow,
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

type MapStateToPropsType = {
    totalUsersCount: number,
    pageSize: number,
    users: UserType[],
    followingInProgress: boolean,
    currentPage: number,
    isFetching: boolean,
}

type MapDispatchToPropsType = {
    unFollow: (id: number) => void,
    follow: (id: number) => void,
    requestUsers: (currentPage: number, pageSize: number) => void
}

type UserAPIPropsType = MapStateToPropsType & MapDispatchToPropsType


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

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
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
    connect<MapStateToPropsType, MapDispatchToPropsType, any, AppStateType>(
        mapStateToProps,
        {follow, unFollow, requestUsers})
)(UsersAPI);