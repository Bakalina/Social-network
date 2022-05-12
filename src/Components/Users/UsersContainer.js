import React, {useEffect} from "react";
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


const UsersAPI = (props) => {

    useEffect(() => {
        props.requestUsers(props.currentPage, props.pageSize);
    },[]);

    const onPageChanged = (pageNumber) => {
        props.requestUsers(pageNumber, props.pageSize);
    };
    return <>
        { props.isFetching ? <Preloader /> : null }
        <Users
            users={props.users}
            unFollow={props.unFollow}
            follow={props.follow}
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            onPageChange={onPageChanged}
            // currentPage={props.currentPage}
            followingInProgress={props.followingInProgress}
        />
    </>;
};

const mapStateToProps = (state) => {
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