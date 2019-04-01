import React from 'react';
import Button from './core/Button';
import Card from './product/Card';

class Pay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      totalVat: 0,
      totalEcoTax: 0,
      totalAfterTax: 0,
      basket: {}
    };

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd({ name, price }) {
    const newTotal = this.state.total + price;
    const newBasket = this.state.basket;
    if (newBasket.hasOwnProperty(name) === false) {
      newBasket[name] = 0;
    }
    newBasket[name] = newBasket[name] + 1;

    const totalItems = this.getTotalItems(newBasket);

    const totalEcoTax = parseInt(totalItems * .3 * 100) / 100;

    const totalVat = parseInt(newTotal * .2 * 100) / 100;

    const totalAfterTax = parseInt((newTotal + totalVat + totalEcoTax) * 100) / 100;

    this.setState({
      total: newTotal,
      totalVat,
      totalEcoTax,
      totalAfterTax,
      basket: newBasket
    });
  }

  getTotalItems(basket) {
    const totalItems = Object.values(basket);
    const total = totalItems.reduce((a, b) => a + b);
    console.log("total", total);
    return total;
  }

  renderBasket() {
    const { basket } = this.state;

    console.log("basket", basket);
    const keys = Object.keys(basket);
    return keys.map((key, index) => {
      return (
        <p className="col-12" key={index} style={{
          fontSize: ".7em"
        }}>
          {key} x {basket[key]}
        </p>
      );
    });
  }

  renderCards() {
    return this.props.items.map((item, index) => {
      return (
        <Card key={index} {...item} onClick={this.onAdd} />
      );
    });
  }

  render() {
    const { items } = this.props;
    if (items.length === 0) {
      return (
        <h1 className="col-12">No items are available</h1>
      );
    }
    return (
      <div className="col-12">
        <h3 className="col-12">Pay</h3>
        <div className="row">
          {this.renderBasket()}
        </div>
        <div className="row">
          <div className="col-12">
            <p className="float-right">SubTotal: {this.state.total} €</p>
          </div>
          <div className="col-12">
            <p className="float-right">VAT: {this.state.totalVat} €</p>
          </div>
          <div className="col-12">
            <p className="float-right">Eco tax: {this.state.totalEcoTax} €</p>
          </div>
          <div className="col-12">
            <p className="float-right" style={{fontSize: "1.3em"}}>Total: {this.state.totalAfterTax} €</p>
          </div>
        </div>
        <div className="row">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default Pay;