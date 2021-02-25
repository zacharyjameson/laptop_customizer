import React, { Component } from "react";
import slugify from "slugify";
import FeatureTitle from "./FeatureTitle";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

class FeatureName extends Component {
      
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.props.features[feature].name}
              onChange={(e) => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });
      return (
        <FeatureTitle
          feature={feature}
          options={options}
          featureHash={featureHash}
        />
      );
    });
    return features;
  }
}

export default FeatureName;
