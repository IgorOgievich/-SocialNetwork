import React from 'react';
import a from '../Users/Users.module.css';

let Users = (props) => {
    return (
        <div className={a.users}>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Igor_Starygin_col.jpg/266px-Igor_Starygin_col.jpg" alt="" />
                        </div>
                        <div>
                            <button>Follow</button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
};

export default Users;

