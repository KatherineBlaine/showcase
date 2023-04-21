import React from 'react';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Books from '../Books/Books';
import Header from '../Header/Header';
import './App.css';
import sampleBooks from '../../sampleData/sampleBooks';

const App = () => {
  const [allBooks, setAllBooks] = useState(sampleBooks)

  return (
    <div className="App">
      <Header />
      <Books allBooks={allBooks}/>
    </div>
  );
}

export default App;
