import React from 'react';
import Slider from './core/Slider';
import Button from './core/Button';

class Add extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      price: 1,
      name: ''
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
  }

  onChangeName(evt) {
    console.log(">>Add onChangeName")
    const name = evt.target.value
    console.log("name", name)
    this.setState({
      name
    });
    console.log("<< Add onChangeName")
  }

  onChangePrice(price) {
    console.log(">> onChangePrice")
    console.log("price", price)
    this.setState({
      price
    });
    console.log("<< onChangePrice")
  }

  render() {
    return (
      <div className="col-12">
        <div className="form col">
        <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              placeholder="Item"
              onChange={this.onChangeName} />
            <div className="input-group-append">
              <Button onClick={() => this.props.onClick({
                name: this.state.name,
                price: this.state.price
              })}>
                Add
              </Button>
            </div>
          </div>
          <div className="input-group">
            <p className="pull-right">{this.state.price} €</p>
            <Slider
              min={1}
              max={10}
              value={this.state.price}
              onChange={this.onChangePrice} />
          </div>
        </div>
      </div>
    );
  }
}

export default Add;

