import { useState } from "react";
import './Form.css'

const Form = ( { searchBooks } ) => {
  const [searchQuery, setSearchQuery] = useState('')

  const submitQuery = (event) => {
    event.preventDefault()
    searchBooks(searchQuery)
  }
  
  return (
    <form>
      <input type="search" onChange={(event) => setSearchQuery(event.target.value)}></input>
      <button onClick={(event) => submitQuery(event)}>Search</button>
    </form>
  )
}

export default Form;