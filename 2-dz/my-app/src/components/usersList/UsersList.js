import React from "react"


 function UsersList(props){
    return(
        <>
            <h1>{props.info.title2}</h1>
            <p>{props.info.body}</p>
        </>
        // <ul>
        //     <li>{props.user.name} - {props.user.age}</li>

        //     {props.userName.map(user =>{
        //         return(
        //             <li>{user}</li>
        //         )
        //     })}
        // </ul>
    )
}




export default UsersList;