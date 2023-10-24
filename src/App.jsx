import { Component } from 'react'
import booksData from './data/books.json'
import './App.css'

class App extends Component {
  constructor(){
    super();

    this.state = {
      books: [],
      searchField: ''
    }
  }

  componentDidMount(){
    this.setState({
      books: booksData
    })
  }

  onSearchChange = (event) => {
    this.setState(() => {
      const searchField = event.target.value.toLowerCase();
      return { searchField }
    });
  }

  render(){
    
    const { books, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filteredBooks = books.filter( book => book.name.toLowerCase().includes(searchField))

    return (
      <div>
        <h1>Books</h1>
        <input type="search" className='serach-bar' placeholder='Search book' onChange={onSearchChange} />
        {filteredBooks.map(book => (
            <p key={book.book_id}>{book.name}</p>
          ))}
      </div>
    )
  }

}

export default App
