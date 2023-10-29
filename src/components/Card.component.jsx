import { Component } from "react";
import PropTypes from "prop-types";
import goodreadsLogo from "../assets/goodreads_logo.svg"

class Card extends Component {
  render() {
    const { cover, name, category, url } = this.props.book;
    return (
      <div className="card">
        <img className="card__cover" src={cover} alt={name? `${name} cover` : `book cover`} />
        <h2 className="card__title">{name}</h2>
        <p className="card__category">{category}</p>
        <a className="card__link" href={url} target="_blank" rel="noreferrer">
          <span>Add on</span>
          <img src={goodreadsLogo} alt="goodreads" />
        </a>
      </div>
    )
  }
}

Card.propTypes = {
  book: PropTypes.object.isRequired,
}

export default Card;