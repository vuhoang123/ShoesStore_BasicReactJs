import React, { Component } from "react";

export class Cart extends Component {
  closeButtonRef = React.createRef();
  renderCart = () => {
    return this.props.cart.map((item) => {
      return (
        <tr>
          <td>{item.product.id}</td>
          <td>{item.product.name}</td>
          <td>
            <img src={item.product.image} className="w-100" />
          </td>
          <td>
            <button
              className="btn btn-info"
              onClick={() => this.props.decrProduct(item.product)}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              className="btn btn-info"
              onClick={() => this.props.incrProduct(item.product)}
            >
              +
            </button>
          </td>
          <td>{item.product.price}</td>
          <td>{item.product.price * item.quantity}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.deleteCartItem(item.product.id)}
            >
              X
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Cart
              </h5>
              <button
                ref={this.closeButtonRef}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.props.clearCart();
                  this.closeButtonRef.current.click();
                }}
              >
                Paid
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
