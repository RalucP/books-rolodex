import { Component } from "react";
import PropTypes from "prop-types";

class CardList extends Component {

  render(){
    const {books} = this.props;

    return(
      books.map(book => {
        return (
          <p key={book.book_id}>{book.name}</p>
        )
      })
    )
  }

}

CardList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardList;