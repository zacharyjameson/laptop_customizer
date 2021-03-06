import React, { Component } from "react";
import slugify from "slugify";
import FeatureTitle from "./FeatureTitle";
import FeatureOption from "./FeatureOption";
import "../App.css";

class Feature extends Component {
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
              onChange={(e) => this.props.selected(feature, item)}
            />
            <FeatureOption
              itemHash={itemHash}
              itemCost={item.cost}
              itemName={item.name}
            />
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
    return (
      <form className="main__form">
        <h2>Customize Your Laptop</h2>
        {features}
      </form>
    );
  }
}

export default Feature;
