import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from '../Books/Books';
import BookInfo from '../BookInfo/BookInfo';
import Header from '../Header/Header';
import './App.css';
import sampleBooks from '../../sampleData/sampleBooks';
import sampleBook from '../../sampleData/sampleBook'


const App = () => {
  const [allBooks, setAllBooks] = useState(sampleBooks.results.books)

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'><Books allBooks={allBooks}/></Route>
        <Route path='/:id' render={({match}) => {
          console.log(match.params.id)
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
