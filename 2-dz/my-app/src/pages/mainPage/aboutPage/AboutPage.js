import React from "react"
import UsersList from "../../../components/usersList/UsersList";

//dz-2
 function AboutPage(props){
    const info ={
        title2:"I am title",
        body:"lorem bla bla bla bla bla"
    }
    return(
        <div>
            <UsersList info={info}/>
        </div>
    )
}




export default AboutPage;