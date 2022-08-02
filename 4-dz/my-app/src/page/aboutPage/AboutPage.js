import React from "react"

class AboutPage extends React.Component{

    sayHello = () => {
        alert("Hello from method")
    }

    changeInput = (e) => {
        console.log(e.target.value)
    }
     render(){
         return(
             <div>
                 <h1>About page</h1>
                 <input type="text" onChange={this.changeInput}/>
                 <button onClick={this.sayHello}>say hello</button>
             </div>
         )
     }
}