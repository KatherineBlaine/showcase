import { useState } from "react";
import './Form.css'

const Form = ( { searchBooks } ) => {
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const submitQuery = (event) => {
    event.preventDefault()
    setSearched(true)
    searchBooks(searchQuery)
  }

  const resetSearch = () => {
    setSearched(false)
    setSearchQuery('')
  }
  
  return (
    <form>
      <input type="search" onChange={(event) => setSearchQuery(event.target.value)}></input>
      <button onClick={(event) => submitQuery(event)}>Search</button>
      {searched && <h3>{`Showing results for ${searchQuery}`}<button onClick={resetSearch}>Reset Search</button></h3>}
    </form>
  )
}

export default Form;