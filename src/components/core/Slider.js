import React from "react";
import RCSlider from "rc-slider";
import 'rc-slider/assets/index.css';

class Slider extends React.Component {
  render() {
    return (
      <RCSlider
        value={this.props.value}
        max={this.props.max}
        min={this.props.min}
        onChange={this.props.onChange}
      />
    );
  }
}

export default Slider;
