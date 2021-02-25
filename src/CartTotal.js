import React, { Component } from "react";

const total = Object.keys(this.state.selected).reduce(
  (acc, curr) => acc + this.state.selected[curr].cost,
  0
);

class CartTotal extends Component {
  render() {
    return (
      <div className="summary__total__value">
        {USCurrencyFormat.format(total)}
      </div>
    );
  }
}

export default CartTotal;
