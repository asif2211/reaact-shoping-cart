import React, { Component } from "react";
import formatCurrency from "../../util";
import {
  Ul,
  Li,
  ProductBox,
  Images,
  PriceMain,
  Price,
  Button,
  Linkstyle,
  Title,
  ProductDetail,
  ImagesDetail,
  DescriptionContainer,
  ButtonDetailCart,
  DetailDescription,
  DetailTitle,
  Size,CloseButton
} from "./style";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
export default class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      product: null,
    };
  }
  OpenModal = (product) => {
    this.setState({ product });
  };
  closeModal = (product) => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <Fade bottom cascade>
          <Ul>
            {this.props.products.map((product) => (
              <Li key={product.id}>
                <ProductBox>
                  <Linkstyle onClick={() => this.OpenModal(product)}>
                    <Images src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                  </Linkstyle>
                  <PriceMain>
                    <Price>{formatCurrency(product.price)}</Price>
                    <Button onClick={() => this.props.addToCart(product)}>
                      Add To Cart
                    </Button>
                  </PriceMain>
                </ProductBox>
              </Li>
            ))}
          </Ul>
        </Fade>
        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <div>
                
              </div>
              <ProductDetail>
              <CloseButton onClick={this.closeModal}>X</CloseButton>
                <ImagesDetail src={product.image} alt={product.title} />
                <DescriptionContainer>
                  <DetailTitle>{product.title}</DetailTitle>
                  <DetailDescription>{product.description}</DetailDescription>
                  <Size>
                    available Size
                    {product.availableSize.map((x) => (
                      <span>
                        {" "}
                        <button>{x}</button>
                      </span>
                    ))}
                  </Size>
                  
                  <div>
                    <div>{formatCurrency(product.price)}
                    <ButtonDetailCart onClick={()=>{
                      this.props.addToCart(product);
                      this.closeModal()}}>Add to cart</ButtonDetailCart>
                          
                    </div>
                  </div>
                </DescriptionContainer>
              </ProductDetail>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
