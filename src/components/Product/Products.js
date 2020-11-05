import React, { Component } from "react";
import data from "../../Pages/ProductsData/Products.json";
import {
  GridContainer,
  Main,
  Footer,
  Content,
  SubMain,
  Sidebar,
} from "./style";
import ProductList from "./ProductList.js";
import Filter from "../Filter/Filter.js";
import Cart from "../Cart.js/Cart.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestHelloWorld } from "../../action";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      product: data.products,
      size: "",
      sort: "",
      cartItems :localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]
    };
  }
  componentDidMount(){
    this.props.requestHelloWorld();
  }
  handlesortProduct = (event) => {
     const sort =  event.target.value 
      this.setState((state)=>({
        sort : sort,
        product : this.state.product.slice().sort((a,b)=>
        sort ==="lowest" 
        ?
          a.price  > b.price 
          ? 
          1: -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : a.id > b.id 
          ? 1
          :-1
          


        
        ),
      }));
      

    }
  ;
  handlesizeProduct = (event) => {
    if (event.target.value === "") {
      this.setState({ size:event.target.value, product: data.products });
    } else {
      this.setState({
        size: event.target.value,
        product: data.products.filter((product) =>
          product.availableSize.indexOf(event.target.value)>=0
        ),
      });
    }
  };

  addToCart = (product)=>{
   
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item)=>{
      
      if(item.id === product.id)
      {
          item.count++;
          alreadyInCart = true;

      }})

      if(!alreadyInCart) {
        cartItems.push({...product, count:1})
      }
      this.setState({
        cartItems
      })
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }
  removeCart = (product)=>{
    const cartItems = this.state.cartItems.slice();
    
    this.setState({cartItems:cartItems.filter((x)=>x.id!==product.id)});
    localStorage.setItem('cartItems', JSON.stringify(cartItems.filter((x)=>x.id!==product.id)))
  }

  createOrder = (order) =>{
    if(order.name && order.email && order.address)
    {
      alert("need to save order for " + order.name)
    }
    else{
      alert("plese fill all fields")
    }
    
  } 
  


  render() {
    
    return (
      <GridContainer>
        <Main>
          <Content>
          <div>
          
          </div>
            <SubMain>
            {this.props.helloWorld}
              <Filter
              
                count={this.state.product.length}
                sort={this.props.sort}
                size={this.props.size}
                handlesortProduct={this.handlesortProduct}
                handlesizeProduct={this.handlesizeProduct}
              />
              <ProductList products={this.state.product} addToCart={this.addToCart} />
            </SubMain>
            <Sidebar><Cart cartItems={this.state.cartItems} removeCart={this.removeCart} createOrder={this.createOrder}/></Sidebar>
          
          </Content>
        </Main>
        <Footer>footer</Footer>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => ({ helloWorld: state.helloWorld });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHelloWorld }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Products);