import React from "react";
import * as axios from "axios";
import style from './Users.module.css'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)})
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = [];
        for (let i = 1; i <= pageCount; i++ ) {
            pages.push(i)
        }

        return <>
            <div>
                {pages.map(el=>{
                    // eslint-disable-next-line react/jsx-key
                  return <button onClick={()=> {this.onPageChange(el)}} className={this.props.currentPage === el && style.selectedPage}>{el}</button>
                })}
            </div>
        <div className={style.users}>

            {this.props.users.map(el =>
                <div className={style.card} key={el.id}>
                    <span>
                        <div><img width='70px' alt='image'
                                  src={el.photos.small != null
                                      ? el.photos.small
                                      : 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/></div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {this.props.unFollow(el.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(el.id)}}>Follow</button>}
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
        </>
        }
    }

export default Users;

