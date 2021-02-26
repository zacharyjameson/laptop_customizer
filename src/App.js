import React, { Component } from "react";
import "./App.css";
import Feature from "./Features/Feature";
import CartSummary from "./Cart/CartSummary";
import CartTotal from "./Cart/CartTotal";
import Header from "./Header/Header";

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      },
    },
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Feature
            features={this.props.features}
            selected={(feature, newValue) =>
              this.updateFeature(feature, newValue)
            }
            state={this.state.selected}
          />
          <CartSummary selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
