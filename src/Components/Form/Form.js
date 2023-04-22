import { useState } from "react";
import { Link } from "react-router-dom";
import './Form.css'

const Form =  () => {
  const [searchQuery, setSearchQuery] = useState('')

  // const submitQuery = (event) => {
  //   event.preventDefault()
  //   search(searchQuery)
  // }

  // const resetSearch = () => {
  //   setSearchQuery('')
  //   reset()
  // }
  
  return (
    <form>
      <input type="search" value={searchQuery} onInput={(event) => setSearchQuery(event.target.value)}></input>
      <Link to={`/search/${searchQuery}`}>Search</Link>
      {/* {searched && <h3>{`Showing results for '${searchQuery}'`}<button>Reset Search</button></h3>} */}
    </form>
  )
}

// Search Results As Route
// Clicking search would route user to a dynamic URL using the query
// {`/${query}`}
// pass query as prop 
// Make seach button a link to /:query
// Make route in App that will display filtered books by this query in this route

export default Form;