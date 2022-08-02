import React from "react";

class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "",
                age: 0,
                username: ""
            },
            title:"I am initial title",
            users:[]
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            title:"I am new title"
        })
        console.log(this.state.title)
        }

    componentDidUpdate( prevState) {
        if (this.state.title !== prevState.title){
            console.log(this.state.title)
        }
    }


    changeInput = (e) => {
        console.log(e.target.name);

        this.setState({
                data: {
                    ...this.state.data,
                    [e.target.name]: e.target.value
                }
            }
        )
    }

    submitData = () => {
        console.log(this.state);
    }

    getUsers = ()=> {
        this.setState({
            ...this.state,
            users:["Dastan","Ali","Amir"]
        })


}
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <input
                    type="text"
                    placeholder="name"
                    onChange={this.changeInput}
                    name="name"
                />

                <input
                    type="number"
                    placeholder="age"
                    name="age"
                    onChange={this.changeInput}
                />

                <input
                    type="text "
                    placeholder="username"
                    name="username"
                    onChange={this.changeInput}
                />

                <button onClick={this.submitData}>register user</button>

                <button onClick={this.getUsers}>get users</button>

                <User users={this.state.users}/>
            </div>
        );
    }
}

export default FormPage;