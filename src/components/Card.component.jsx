import { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  render() {
    const { cover, name, category, id } = this.props;
    return (
      <div className="card" key={id}>
        <img className="card__cover" src={cover} alt={`${name} cover`} />
        <h3 className="card__title">{name}</h3>
        <p className="card__category">{category}</p>
      </div>
    )
  }
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Card;