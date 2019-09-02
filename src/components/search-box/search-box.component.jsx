import React from 'react'

// Styles
import './search-box.styles.css'

const SearchBox = ({ placeholder, onChangeHandler }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={e => onChangeHandler(e)}
    />
  )
}

export default SearchBox
