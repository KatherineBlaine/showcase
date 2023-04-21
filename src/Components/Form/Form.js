import { useState, useEffect } from "react";
import './Form.css'

const Form = () => {
  const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <form>
      <input type="search" onChange={(event) => setSearchQuery(event.target.value)}></input>
      <button onClick={(event) => {
        event.preventDefault()
        console.log(searchQuery)
      }}>Search</button>
    </form>
  )
}

export default Form;