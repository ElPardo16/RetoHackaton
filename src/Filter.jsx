import React from 'react'
import './Filter.css'

function Filter(props) {
  return (
    <div className='filter-select'>
      <select name="filter" id="filter">
        <option value="value1" select>{props.value1}</option>
        <option value="value2">{props.value2}</option>
      </select>
    </div>
  )
}

export default Filter