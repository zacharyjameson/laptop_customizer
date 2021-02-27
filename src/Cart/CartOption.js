import React, { Component } from "react";
import ItemCost from './ItemCost';
import '../App.css';

class CartOption extends Component {
  render() {
    return (
      <div className="summary__option" key={this.props.featureHash}>
        <div className="summary__option__label">{this.props.feature}</div>
        <div className="summary__option__value">{this.props.optionName}</div>
        <ItemCost selectedOption={this.props.optionCost} />
      </div>
    );
  }
}

export default CartOption;
