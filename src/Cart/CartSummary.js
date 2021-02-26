import React, { Component } from "react";
import ItemCost from "./ItemCost";

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
    return summary;
  }
}

export default CartSummary;
