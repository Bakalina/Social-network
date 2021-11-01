import React from "react";
import PropTypes from "prop-types";




const Users = (mapStateToProps) => {
    console.log(users)
    return <div>
        {
            users.map(el => {
                <div key={el.id}>
                    <div>
                        <div>
                            <img alt='image' src={el.photoUrl}/>
                        </div>
                        <div>
                            <button>{el.followed}</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{el.fullName}</div>
                            <div>{el.status}</div>
                        </div>
                        <div>
                            <div>{el.location.city}</div>
                            <div>{el.location.country}</div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}


export default Users;