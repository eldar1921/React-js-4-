import React from 'react';
import  classes from "./mainPage.module.css"

function MainPage(props) {
    const users = ["eldar","dastan","aidar"]

    return (
        <div className="container">
            <h1 className={classes.title}>Hello</h1>

            <ul>
                {users.map((user,key) => <li key={key}>{user}</li>)}
            </ul>
        </div>
    );
}

export default MainPage;