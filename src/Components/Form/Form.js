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

  const showingMsg = <h3>{`Showing results for '${searchQuery}'`}<Link to={`/`}><button onClick={reset}>Reset</button></Link></h3>

  const searchField = <div>
    <input type="search" value={searchQuery} onInput={(event) => setSearchQuery(event.target.value)}></input>
    <Link to={`/search/${searchQuery}`}><button onClick={search}>Search All Books</button></Link>
  </div>

  return (
    <form>
      {!searched && searchField}
      {searched && showingMsg}
    </form>
  )
}

export default Form;