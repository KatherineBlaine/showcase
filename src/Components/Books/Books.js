import React from 'react';
import Book from '../Book/Book';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

  const noResults = <div className='no-results'>
    <h3>No results! Please try searching for something else.</h3>
    <Link to='/'><button>HOME</button></Link>
  </div>

  const books = <div className='books-container'>{bookCards}</div>

  return (
    bookCards.length !== 0 ? books : noResults
  )
}

export default Books;

Books.propTypes = {
  booksToDisplay: PropTypes.arrayOf(PropTypes.shape({
    book_image: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    primary_isbn10: PropTypes.string,
    rank: PropTypes.number,
    weeks_on_list: PropTypes.number,
    genre: PropTypes.string
  }))
}