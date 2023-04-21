import { useState, useEffect } from "react";
import './Form.css'

const Form = () => {
  const [searchQuery, setSearchQuery] = useState('')
  // const [filteredBooks, setFilteredBooks] = useState([])

console.log(searchQuery)
  return (
    <form>
      <input type="search" onChange={(event) => setSearchQuery(event.target.value)}></input>
      <button>Search</button>
    </form>
  )
}

export default Form;