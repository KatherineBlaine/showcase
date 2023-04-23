import { Link } from 'react-router-dom'
import './BookInfo.css'

const BookInfo = ({ selectedBook }) => {
  return (
    <div className='book-info'>
      <img src={selectedBook.book_image} className='info-img'></img>
        <div className='right-content'>
          <h1 className='book-title'>{selectedBook.title}</h1>
          <h2 className='description'>{selectedBook.description}</h2>
          <p className='genre-tag'>Genre:<p className='genre'>{selectedBook.genre}</p></p>
          <div className='stats'>
            <p className='stat-tag'>Weeks on bestseller list: <p className='book-stat'>{selectedBook.weeks_on_list}</p></p>
            <p className='stat-tag'>Current Rank:<p className='book-stat'> #{selectedBook.rank}</p></p>
          </div>
          <Link to='/' className='link'><button>HOME</button></Link>
        </div>
    </div>
  )
}

export default BookInfo;