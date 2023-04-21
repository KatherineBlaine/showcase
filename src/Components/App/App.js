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
  const [allBooks, setAllBooks] = useState(sampleBooks)

  return (
    <div className="App">
      <Header />
      <BookInfo selectedBook={sampleBook}/>
      {/* <Books allBooks={allBooks}/> */}
    </div>
  );
}

export default App;
