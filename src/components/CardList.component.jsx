import { Component } from "react";
import PropTypes from "prop-types";
import Card from "./Card.component"

class CardList extends Component {

  render(){
    const {books} = this.props;

    return(
      <div className="card-list">
        {books.map(book => {
          const { cover, name, category, id } = book;
          return (
            <Card 
              key={id}
              id={id}
              cover={cover}
              name={name}
              category={category}
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