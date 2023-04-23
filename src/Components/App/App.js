import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchApi } from '../../Utilities/ApiCalls';
import Books from '../Books/Books';
import BookInfo from '../BookInfo/BookInfo';
import Header from '../Header/Header';
import Form from '../Form/Form';
import NotFound from '../NotFound/NotFound';
import cleanData from '../../Utilities/dataCleaning';
import './App.css';

const App = () => {
  const [allBooks, setAllBooks] = useState([])
  const [error, setError] = useState('')

  const getBooks = async () => {
    try {
      const data = await fetchApi()
      const books = await cleanData(data)
      setAllBooks(books)
    } catch(error) {
        setError('Server Error')
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          {error === '' ?
            <div>
              <Form />
              <Books booksToDisplay={allBooks}/>
            </div>
          : <h1>Error: {error}, please try again.</h1>}
        </Route>
        <Route path='/search/:searchQuery' render={({match}) => {
          const filteredBooks = allBooks.filter(book => book.title.includes(match.params.searchQuery) || book.title.includes(match.params.searchQuery.toUpperCase()))
          return (
            <div>
              <Form />
              <Books booksToDisplay={filteredBooks}/>
            </div>
          )}}>
        </Route>
        <Route path='/book/:id' render={({match}) => {
          const selectedBook = allBooks.find(book => book.primary_isbn10 === match.params.id)
          return (
            <BookInfo selectedBook={selectedBook}/>
          )}}>
        </Route>
        <Route path='*'>
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;