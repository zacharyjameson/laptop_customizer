import React, { Component } from "react";
import App from "../App";
import ItemCost from "./ItemCost";
import '../App.css';
import CartTotal from './CartTotal';

class CartSummary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];
      console.log(selectedOption);
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature}</div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <ItemCost selectedOption={selectedOption.cost} />
        </div>
      );
    });
    return (
      <section className="main__summary">
        <h2>Your Cart</h2>
        {summary}
        <CartTotal selected={this.props.selected} />
      </section>
    );
  }
}

export default CartSummary;
