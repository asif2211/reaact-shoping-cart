import React, { Component } from "react";
import {
  ItemExistance,
  Ul,
  Li,
  Image,
  Title,
  CartItem,
  Button,
  RemoveBtnContainer,
  TotalAmount,
  RemoveBtn,
  ProceedBtn,
  ProceedContainer,
  CheckoutContainer,
  CheckoutFileds,
  InputContainer,
  Input,
  CheckOutBtn,
  CheckoutModule,
} from "./style";
import formatCurrency from "../../util";
import Fade from "react-reveal/Fade";
import Rotate from 'react-reveal/Rotate';
import Flash from 'react-reveal/Flash';
export default class Cart extends Component {
  state = {
    name: "",
    email: "",
    address: "",
    checkOut: false,
  };
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createOrder = (e) => {
    if (this.state.name) e.preventDefault();
    const order = {
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      cartItems: this.props.cartItems,
    };
    this.props.createOrder(order);
  };
  render() {
    const { cartItems } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          <ItemExistance>Cart is empty</ItemExistance>
        ) : (
          <ItemExistance>You have {cartItems.length} in cart</ItemExistance>
        )}
        <div>
          <div>
         
            <Ul>
              {cartItems.map((item) => (
                 <Rotate top left >
                <Li>
                <Flash>
                  <CartItem>
                    <Image src={item.image} alt={item.title} />
                  </CartItem>
                  <RemoveBtnContainer>
                    <Title>{item.title}</Title>
                    <TotalAmount style={{ color: "#54565A" }}>
                      {formatCurrency(item.price)}x{item.count}{" "}
                    </TotalAmount>
                    
                    <button
                      style={{ padding: ".5rem", width: "5rem" }}
                      onClick={() => this.props.removeCart(item)}
                    >
                      Remove
                    </button>
                    
                  </RemoveBtnContainer>
                  </Flash>
                </Li>
                </Rotate>
              ))}
            </Ul>
          
          </div>
          <div>
            {cartItems.length !== 0 && (
              <ProceedContainer>
                <TotalAmount style={{ color: "#54565A" }}>
                  Total:{" "}
                  {formatCurrency(
                    cartItems.reduce((a, b) => a + b.price * b.count, 0)
                  )}
                </TotalAmount>{" "}
                <ProceedBtn onClick={() => this.setState({ checkOut: true })}>
                  Proceed
                </ProceedBtn>
              </ProceedContainer>
            )}

            {this.state.checkOut && (
              <CheckoutModule>
                <Fade right cascade>
                <form onSubmit={this.checkOut}>
                  <CheckoutContainer>
                    <CheckoutFileds>
                      <InputContainer>
                        <Input
                          name="email"
                          type="email"
                          required
                          placeholder="please enter email"
                          onChange={this.handleInput}
                          value={this.state.email}
                        />
                      </InputContainer>
                      <InputContainer>
                        <Input
                          name="name"
                          type="text"
                          required
                          placeholder="please enter name"
                          onChange={this.handleInput}
                          value={this.state.name}
                        />
                      </InputContainer>
                      <InputContainer>
                        <Input
                          name="address"
                          type="text"
                          required
                          placeholder="please enter address"
                          onChange={this.handleInput}
                          value={this.state.address}
                        />
                      </InputContainer>
                      <InputContainer>
                        <CheckOutBtn onClick={this.createOrder}>
                          Checkout
                        </CheckOutBtn>
                      </InputContainer>
                    </CheckoutFileds>
                  </CheckoutContainer>
                </form>
                </Fade>
              </CheckoutModule>
            )}
          </div>
        </div>
      </div>
    );
  }
}
