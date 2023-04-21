import './Book.css'

const Book = ({ img, title, id }) => {
  return (
    <div className='book-card'>
      <img src={img}></img>
      <h2>{title}</h2>
    </div>
  )
}

export default Book;