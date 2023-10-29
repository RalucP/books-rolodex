import { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card.component"

class CardList extends Component {

  render(){
    const {books} = this.props;

    return(
      <div className="card-list">
        {books.map(book => {
          const { book_id } = book;
          return (
            <Card 
              key={book_id}
              book={book}
            />
          )
        })}
      </div>
    )
  }

}

CardList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardList;