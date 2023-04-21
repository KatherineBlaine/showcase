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
      <Switch>
        <Route exact path='/'><Books allBooks={allBooks}/></Route>
        <Route exact path='/bookInfo'><BookInfo selectedBook={sampleBook}/></Route>
      </Switch>
     
    </div>
  );
}

export default App;
