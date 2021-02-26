import React, { Component } from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class FeatureOption extends Component {
  render() {
    return (
      <label htmlFor={this.props.itemHash} className="feature__label">
        {this.props.itemName} ({USCurrencyFormat.format(this.props.itemCost)})
      </label>
    );
  }
}

export default FeatureOption;
