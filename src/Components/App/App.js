import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { fetchApi } from '../../Utilities/ApiCalls';
import Books from '../Books/Books';
import BookInfo from '../BookInfo/BookInfo';
import Header from '../Header/Header';
import cleanData from '../../Utilities/dataCleaning';
import './App.css';

const App = () => {
  const [allBooks, setAllBooks] = useState([])

  const getBooks = async () => {
    const data = await fetchApi()
    const books = cleanData(data)
    setAllBooks(books)
  }

  useEffect(() => {
    getBooks()
  }, [])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'><Books allBooks={allBooks}/></Route>
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
