import { ChangeEvent, useEffect, useState } from 'react';
import booksData from './data/books.json'
import CardList from './components/CardList.component';
import SearchBar from './components/SearchBar.component'
import './App.css'

export type Book = {
  book_id: string;
  name: string;
  category: string;
  cover: string;
  url: string;
}

const App = () => {

  const [ books, setBooks ] = useState(booksData);
  const [searchField, setSearchField] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) : void => {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString);
  }

  useEffect(() => {
    const newFilteredMonsters = books.filter( book => book.name.toLowerCase().includes(searchField))
    setFilteredBooks(newFilteredMonsters);
  }, [books, searchField])

  return(
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

export default App;
