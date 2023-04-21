import { useState, useEffect } from "react";
import './Form.css'

const Form = ( { filterBooks} ) => {
  const [searchQuery, setSearchQuery] = useState('')
  // const [filteredBooks, setFilteredBooks] = useState([])

  return (
    <form>
      <input type="search" onChange={(event) => setSearchQuery(event.target.value)}></input>
      <button onClick={(event) => filterBooks(event)}>Search</button>
    </form>
  )
}

export default Form;