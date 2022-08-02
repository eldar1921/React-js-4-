import React from 'react';
import classes from "./User.module.css"

function User(props) {
    const users = ["dasgeg","gwegw"]
    return (
        <div>
            <h1 className={classes.title}>user</h1>

            {users.map((user,key) => <li key={key}>{user}</li>)}
        </div>
    );
}

export default User;