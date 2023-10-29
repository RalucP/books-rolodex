import PropTypes from "prop-types";
import Card from "./Card.component"

const CardList = ({books}) => (
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

CardList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CardList;