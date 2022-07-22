import React from 'react';

class OnePage extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        return(
            // <h1>I am class component - {this.props.title}</h1>

             <ul>
                 <li>{this.props.one[0]}</li>
                 <li>{this.props.one[1]}</li>
                 <li>{this.props.one[2]}</li>
             </ul>
            // console.log(this.props.one)
        )
    }
}

export default OnePage;