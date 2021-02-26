import React, { Component } from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

class ItemCost extends Component {
  render() {
    return (
      <div className="summary__option__cost">
        {USCurrencyFormat.format(this.props.selectedOption)}
      </div>
    );
  }
}

export default ItemCost;
