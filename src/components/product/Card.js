import React from 'react';
import Button from '../core/Button';

import specimen from '../../specimen.jpg';

class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      source: specimen
    };
  }

  componentDidMount() {
    const url = `http://digitous.konexio.eu/exercises/bakery/api/?q=${this.props.name}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        if (json.success === true) {
          const source = json.source;
          this.setState({
            source
          });
        }
      });
  }

  render() {
    const { name, price } = this.props;
    return (
      <div className="col-6 col-md-3">
      <Button isSelected={false} onClick={() => this.props.onClick({ name, price })}>
        <img src={this.state.source} className="img-fluid" alt={this.props.name} />
      </Button>
      </div>
    );
  }
}

export default Card;