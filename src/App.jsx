import { Component } from 'react'
import booksData from './data/books.json'
import CardList from './components/CardList.component';
import SearchBar from './components/SearchBar.component'
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
        <h1>Books Rolodex</h1>
        <SearchBar 
          className='search-bar'
          placeholder='Search books...'
          onChangeHandler={onSearchChange}
        />
        <CardList 
          books={filteredBooks} 
        />
      </div>
    )
  }

}

export default App
