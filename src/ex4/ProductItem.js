import React, { Component } from "react";

export class ProductItem extends Component {
  render() {
    const { name, image, price } = this.props.prod;
    return (
      <div className="card mb-4 p-3">
        <img src={image} className="w-100 d-block" />
        <h3>{name}</h3>
        <h5>{price}$</h5>
        <div>
          <button
            className="btn btn-info d-inline"
            onClick={() => this.props.selectProduct(this.props.prod)}
          >
            Detail
          </button>
          <button
            className="btn btn-dark "
            onClick={() => {
              this.props.addToCart(this.props.prod);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
