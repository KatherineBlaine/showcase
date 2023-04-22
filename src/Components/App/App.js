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
  // const [filteredBooks, setFilteredBooks] = useState([])
  // const [searched, setSearched] = useState(false)

  // const filterBooksByQuery = (query) => {
  //   setSearched(true)
  //   const filteredBooks = allBooks.filter(book => book.title.includes(query) || book.title.includes(query.toUpperCase()))
  //   setFilteredBooks(filteredBooks)
  // }

  // const resetBooks = () => {
  //   setSearched(false)
  //   setFilteredBooks([])
  // }

  const getBooks = async () => {
    const data = await fetchApi()
    const books = await cleanData(data)
    setAllBooks(books)
  }

  useEffect(() => {
    getBooks()
  }, [])

  const mainView = 
    <div>
      <Form/>
      <Books booksToDisplay={allBooks}/>
    </div>

  // const filteredView = 
  //   <div>
  //     <Form />
  //     <Books booksToDisplay={filteredBooks}/>
  //   </div>

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>{mainView}</Route>
        <Route path='/search/:searchQuery' render={({match}) => {
          console.log(match.params)
          const filteredBooks = allBooks.filter(book => book.title.includes(match.params.searchQuery) || book.title.includes(match.params.searchQuery.toUpperCase()))
          return (
            <Books booksToDisplay={filteredBooks}/>
          )
        }}>
        </Route>
        <Route path='/book/:id' render={({match}) => {
          console.log(match.params)
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