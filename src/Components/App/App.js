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
  const [loading, setLoading] = useState(false)

  const getBooks = async () => {
    try {
      setLoading(true)
      const data = await fetchApi('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=E9xtZB07yTZcCOoDRFhWpJmAEhjNMQ2r')
      const books = await cleanData(data)
      setAllBooks(books)
    } catch(error) {
        setError('Server Error')
    }
    setLoading(false)
  }

  useEffect(() => {
    getBooks()
  }, [])

  const loadingPage = loading && <h3 className='loading'>LOADING</h3>
  const errorPage = error !== '' && <h1>Error: {error}, please try again.</h1>
  const mainPage = !loading && error === '' ? <div><Form /><Books booksToDisplay={allBooks}/></div> : null

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
          {loadingPage}
          {errorPage}
          {mainPage}
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