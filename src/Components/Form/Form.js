import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './Form.css'

const Form =  () => {
  const [searchQuery, setSearchQuery] = useState('')

  const reset = () => {
    setSearchQuery('')
  }

  return (
    <form>
      <input type="search" value={searchQuery} onInput={(event) => setSearchQuery(event.target.value)}></input>
      <Link to={`/search/${searchQuery}`}><button>Search All Books</button></Link>
      <Link to={`/`}><button onClick={reset}>Reset</button></Link>
    </form>
  )
}

export default Form;