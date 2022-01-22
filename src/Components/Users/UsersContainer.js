import React, {useEffect} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleIsFollowingProgress,
    getUsers
} from "../../Redux/usersReducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";
import {compose} from "redux";


const UsersAPI = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    },[]);

    const onPageChanged = (pageNumber) => {
        props.getUsers(pageNumber, props.pageSize);
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
            currentPage={props.currentPage}
            followingInProgress={props.followingInProgress}
        />
    </>;
};

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};


export default compose(
    withAuthRedirectComponent,
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers
    })
)(UsersAPI);