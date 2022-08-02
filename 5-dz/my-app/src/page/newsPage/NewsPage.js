import React from "react"

class NewsPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menu: false
        }
    }
    changeTitle = ()=>{
        this.setState({
            title:"I am new title"
        })
    }

    changeMenu = ()=>{
        this.setState({
            menu:!this.state.menu
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.menu === true ? <Header/> : "" //1

                    // this.state.menu && <Header/> //2
                }
                <Header/>
                <button>menu</button>
                <h1>{this.state.title}</h1>
                <button onClick={this.changeTitle}>change text</button>
            </div>
        )
    }
}

export default NewsPage;