import React, { Component } from 'react';
import { formatPrice } from '../helpers';
export default class Fish extends Component {
  render() {
    const details = this.props.details;
    const isAvailable = details.status === 'available';
    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.image} />
        <h3 className="fish-name">
          {details.name}
          <span className="price"> {formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button
          onClick={() => this.props.addToOrder(this.props.index)}
          disabled={!isAvailable}
        >
          {isAvailable ? 'Add To Order' : 'Sold Out'}
        </button>
      </li>
    );
  }
}
