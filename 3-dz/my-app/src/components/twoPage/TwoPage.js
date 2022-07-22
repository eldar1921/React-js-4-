import React from 'react';

class TwoPage extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return(
            // <h1>I am class component - {this.props.title}</h1>
            <ul>
                <li>{this.props.two[0]}</li>
                <li>{this.props.two[1]}</li>
                <li>{this.props.two[2]}</li>
            </ul>
        )
    }
}

export default TwoPage;