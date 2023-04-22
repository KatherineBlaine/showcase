import React from 'react';
import Book from '../Book/Book';
import './Books.css'

const Books = ({ booksToDisplay }) => {
  const bookCards = booksToDisplay.map(book => {
    return (
      <Book
        img={book.book_image}
        title={book.title}
        author={book.author}
        key={book.primary_isbn10}
        id={book.primary_isbn10}
      />
    )
  })

  return (
    <div className='books-container'>
      {bookCards}
    </div>
  )
}

export default Books;