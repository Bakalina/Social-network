import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleIsFollowingProgress,
    getUsers
} from "../../Redux/usersReducer";
import Preloader from "../Preloader/Preloader";


class UsersAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

     onPageChanged = (pageNumber) => {
         this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChange={this.onPageChanged}
                currentPage={this.props.currentPage}
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(UsersAPI);