import React from 'react';
import User from "../../components/user/User"
import Administrator from "../../components/administrator/Administrator";

function ContactsPage({number}) {

    if(number = 1){
        return (
            <Administrator/>
        );
    }
    else if(number === 0){
        return (
            <User/>
        );
    }

}

export default ContactsPage;