import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchApi } from '../../Utilities/ApiCalls';
import Books from '../Books/Books';
import BookInfo from '../BookInfo/BookInfo';
import Header from '../Header/Header';
import Form from '../Form/Form';
import cleanData from '../../Utilities/dataCleaning';
import './App.css';

const App = () => {
  const [allBooks, setAllBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])

  const filterBooksByQuery = (query) => {
    const filteredBooks = allBooks.filter(book => book.title.includes(query) || book.title.includes(query.toUpperCase()))
    setFilteredBooks(filteredBooks)
  }

  const resetBooks = () => {
    setFilteredBooks([])
  }

  const getBooks = async () => {
    const data = await fetchApi()
    const books = await cleanData(data)
    setAllBooks(books)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="App">
      <Header />
      <Form search={filterBooksByQuery} reset={resetBooks}/>
      <Switch>
        <Route exact path='/'>
          {filteredBooks.length === 0 ? <Books booksToDisplay={allBooks}/> : <Books booksToDisplay={filteredBooks}/>}
        </Route>
        <Route path='/:id' render={({match}) => {
          const selectedBook = allBooks.find(book => book.primary_isbn10 === match.params.id)
          return (
            <BookInfo selectedBook={selectedBook}/>
          )
        }}>
        </Route>
      </Switch>
     
    </div>
  );
}

export default App;
