import React, { Component } from "react";
import { FilterContainer ,FilterResult,Order,Select,Sorts} from "../Filter/style";
export default class Filter extends Component {
  render() {
    return (
      <FilterContainer className="Filter">
        <FilterResult >Products: {this.props.count}</FilterResult>
        <Order>
          Order: 
          <Select value={this.props.sort}
              onChange={this.props.handlesortProduct}>
            <option value="">
              All
            </option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </Select>
        </Order>
        <Sorts>
          Sorts:
          <Select value={this.props.size}
              onChange={this.props.handlesizeProduct}>
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
          </Select>
        </Sorts>
      </FilterContainer>
    );
  }
}
