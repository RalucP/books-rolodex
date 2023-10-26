import { Component } from "react";
import PropTypes from "prop-types";
import goodreadsLogo from "../assets/goodreads_logo.svg"

class Card extends Component {
  render() {
    const { cover, name, category, link, id } = this.props;
    return (
      <div className="card" key={id}>
        <img className="card__cover" src={cover} alt={`${name} cover`} />
        <h2 className="card__title">{name}</h2>
        <p className="card__category">{category}</p>
        <a className="card__link" href={link} target="_blank" rel="noreferrer">
          <span>Add on</span>
          <img src={goodreadsLogo} alt="goodreads" />
        </a>
      </div>
    )
  }
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Card;