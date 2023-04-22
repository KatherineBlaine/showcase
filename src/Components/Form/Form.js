import { useState } from "react";
import { Link } from "react-router-dom";
import './Form.css'

const Form =  () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searched, setSearched] = useState(false)

  const search = () => {
    setSearched(true)
  }

  const reset = () => {
    setSearched(false)
    setSearchQuery('')
  }

  const showingMsg = !searched ? 'Showing all books' : `Showing results for '${searchQuery}'`

  return (
    <form>
      {!searched && <input type="search" value={searchQuery} onInput={(event) => setSearchQuery(event.target.value)}></input>}
      {!searched && <Link to={`/search/${searchQuery}`}><button onClick={search}>Search</button></Link>}
      {searched && <h3>{showingMsg}<Link to={`/`}><button onClick={reset}>Reset</button></Link></h3>}
    </form>
  )
}

export default Form;