import React from 'react'
import './Search.css'

function Search() {

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Ej: react"
      />
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default Search