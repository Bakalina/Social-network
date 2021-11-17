import React from "react";
import style from './Users.module.css'

const Users = (props) => {

        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return <>
            <div>
                {pages.map((el, i)=>{
                  return <button key={i} onClick={()=> {props.onPageChange(el)}} className={props.currentPage === el && style.selectedPage}>{el}</button>
                })}
            </div>
            <div className={style.users}>
                {props.users.map(el =>
                    <div className={style.card} key={el.id}>
                    <span>
                        <div><img width='70px' alt='image'
                                  src={el.photos.small != null
                                      ? el.photos.small
                                      : 'https://klike.net/uploads/posts/2019-03/1551511801_1.jpg'}/></div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {
                                    props.unFollow(el.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(el.id)
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
        </>

}

export default Users;

