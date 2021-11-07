import React from "react";
import * as axios from "axios";


class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                // eslint-disable-next-line react/prop-types
                this.props.setUsers(response.data.items)})
    }

    render() {
        return <div>
            {/* eslint-disable-next-line react/prop-types */}
            {this.props.users.map(el =>
                <div key={el.id}>
                    <span>
                        <div><img width='70px' alt='image'
                                  src={el.photos.small != null
                                      ? el.photos.small
                                      : 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/></div>
                        <div>
                            {el.followed
                                // eslint-disable-next-line react/prop-types
                                ? <button onClick={() => {this.props.unFollow(el.id)}}>Unfollow</button>
                                // eslint-disable-next-line react/prop-types
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
        }
    }

export default Users;

