import React from 'react';
import Book from '../Book/Book';
import { useState, useEffect } from 'react';

const Books = ({ allBooks }) => {
  console.log(allBooks.results.books)
  const bookCards = allBooks.results.books.map(book => {
    return (
      <h2>hello</h2>
    )
  })

  return (
    <div className='books-container'>
      {bookCards}
    </div>
  )
}

export default Books;