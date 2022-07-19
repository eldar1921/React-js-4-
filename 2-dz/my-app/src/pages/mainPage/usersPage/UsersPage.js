import React from "react"
import UsersList from "../../../components/usersList/UsersList";


 function UsersPage(props){
    const user ={
        name:"Eldar",
        age: 18
    }

    const userName = ["Eldar","Ruslan","Adilet","Finik"]

    return(
        <div>
            <UsersList user={user} userName={userName}/>    
        </div>
    )
}




export default UsersPage;