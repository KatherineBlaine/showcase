import './Book.css'

const Book = ({ img, title, author, id }) => {
  return (
    <div className='book-card'>
      <img src={img}></img>
      <h2>{title}</h2>
      <h3>By {author}</h3>
    </div>
  )
}

export default Book;