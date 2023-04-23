import { useState } from "react";
import { Link } from "react-router-dom";
import './Form.css'

const Form =  () => {
  const [searchQuery, setSearchQuery] = useState('')

  const reset = () => {
    setSearchQuery('')
  }

  return (
    <form>
      <h2 className="explore">EXPLORE</h2>
      <div className="search-elements">
        <input type="search" value={searchQuery} placeholder='Search all books' onInput={(event) => 
          setSearchQuery(event.target.value)}>
        </input>
        <Link to={`/search/${searchQuery}`} className="link">
          <button>Search</button>
        </Link>
        <Link to={`/`} className="link">
          <button onClick={reset}>Reset</button>
        </Link>
      </div>
    </form>
  )
}

export default Form;