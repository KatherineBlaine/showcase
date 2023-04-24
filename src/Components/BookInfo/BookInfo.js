import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './BookInfo.css'

const BookInfo = ({ selectedBook }) => {
    return (
      <div className='book-info'>
        <Link to='/' className='link'>
          <button className='back-btn'>←</button>
        </Link>
        <img src={selectedBook.book_image} className='info-img'></img>
          <div className='right-content'>
            <h1 className='book-title'>{selectedBook.title}</h1>
            <h2 className='description'>{selectedBook.description}</h2>
            <article className='genre-tag'>Genre:<p className='genre'>{selectedBook.genre}</p></article>
            <div className='stats'>
              <article className='stat-tag'>Weeks on bestseller list: <p className='book-stat'>{selectedBook.weeks_on_list}</p></article>
              <article className='stat-tag'>Current Rank:<p className='book-stat'> #{selectedBook.rank}</p></article>
            </div>
          </div>
      </div>
  )
}

export default BookInfo;

BookInfo.propTypes = {
  selectedBook: PropTypes.shape({
    book_image: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
    primary_isbn10: PropTypes.string,
    rank: PropTypes.number,
    weeks_on_list: PropTypes.number,
    genre: PropTypes.string
  })
}