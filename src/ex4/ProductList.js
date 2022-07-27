import React, { Component } from "react";
import ProductItem from "./ProductItem";
export class ProductList extends Component {
  renderProduct = () => {
    return this.props.prod.map((item) => {
      return (
        <div key={item.id} className="col-3">
          <ProductItem
            selectProduct={this.props.selectProduct}
            prod={item}
            addToCart={this.props.addToCart}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderProduct()}</div>;
  }
}

export default ProductList;
