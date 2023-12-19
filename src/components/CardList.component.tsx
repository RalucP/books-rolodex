import Card from "./Card.component"

import { Book } from "../App";

type CardProps = {
  books: Book[]
}

const CardList = ({books} : CardProps) => (
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

export default CardList;