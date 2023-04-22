import { useState } from "react";
import './Form.css'

const Form = ( { search, reset } ) => {
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const submitQuery = (event) => {
    event.preventDefault()
    setSearched(true)
    search(searchQuery)
  }

  const resetSearch = () => {
    setSearched(false)
    setSearchQuery('')
    reset()
  }
  
  return (
    <form>
      <input type="search" value={searchQuery} onInput={(event) => setSearchQuery(event.target.value)}></input>
      <button onClick={(event) => submitQuery(event)}>Search</button>
      {searched && <h3>{`Showing results for ${searchQuery}`}<button onClick={(event) => resetSearch(event)}>Reset Search</button></h3>}
    </form>
  )
}

export default Form;