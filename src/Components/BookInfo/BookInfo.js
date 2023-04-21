import sampleBook from '../../sampleData/sampleBook'
import { Link } from 'react-router-dom'
import './BookInfo.css'

const BookInfo = ({ selectedBook }) => {
  console.log(selectedBook)
  return (
    <div className='book-info'>
      <img src={selectedBook.book_image}></img>
        <div className='right-content'>
          <h1 className='book-title'>{selectedBook.title}</h1>  
          <h2 className='description'>{selectedBook.description}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>#{selectedBook.rank} on NYT bestsellers list</p>
        <p>{selectedBook.weeks_on_list} weeks on NYT bestseller list</p>
        <Link to='/'>HOME</Link>
        </div>
    </div>
  )
}

export default BookInfo;