import React from 'react';

class List extends React.Component {
  render() {
    const { items } = this.props;
    if (items.length === 0) {
      return (
        <h1 className="col-12">No items are available</h1>
      );
    }
    return (
      <div className="col-12">
        <ul className="list-group">
          {items.map(({price, name}, index) => {
            return (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {name}
                <span className="badge badge-primary badge-pill">{price} €</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default List;