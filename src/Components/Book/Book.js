import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Book.css'

const Book = ({ img, title, author, id }) => {
  return (
    <Link to={`/book/${id}`} className='book-card'>
      <img src={img} className='card-img'></img>
      <div className='card-text'>
        <h2>{title}</h2>
        <h3>By {author}</h3>
      </div>
    </Link>
  )
}

export default Book;

Book.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string
}