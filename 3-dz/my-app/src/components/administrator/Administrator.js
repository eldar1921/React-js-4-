import React from 'react';
import classes from "./Administrator.module.css"

function Administrator(props) {
    const Admins = ["erge","ghegre"]
    return (
        <div>
            <h1 className={classes.title}>Administrator</h1>

            <ul>
                {Admins.map((admin,key) => <li key={key}>{admin}</li>)}
            </ul>
        </div>
    );
}

export default Administrator;