import React from "react";
import Products from "../../components/products/Products";

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            products: [],
            input: ""
    }
}
    getProducts = () => {
        this.setState({products:["Apple","Orange","white"]})
    }
    deleteProducts = () => {
        this.setState({products:[]})
    }

    changeInput = (e) => {
        this.setState({...this.state, input: e.target.value})
    }

    addProducts = (e) => {
        this.setState({products:[...this.state.products,this.state.input], input: e.target.value})
        console.log(this.state)
    }

    render() {
        return(
            <div>
                <input type="text" onChange={this.changeInput} value={this.state.input}/>
                <button onClick={this.getProducts}>get products</button>
                <button onClick={this.deleteProducts}>DELETE</button>
                <button onClick={this.addProducts}>add products</button>
                <Products products={this.state.products}/>
            </div>
        )
    }
}

export default ProductsPage