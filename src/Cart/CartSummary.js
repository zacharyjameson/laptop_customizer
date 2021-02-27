import React, { Component } from "react";
import App from "../App";
import ItemCost from "./ItemCost";
import "../App.css";
import CartTotal from "./CartTotal";
import CartOption from './CartOption';

class CartSummary extends Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.props.selected[feature];
      console.log(selectedOption);
      return (
        <CartOption
          featureHash={featureHash}
          feature={feature}
          optionName={selectedOption.name}
          optionCost={selectedOption.cost}
        />
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
