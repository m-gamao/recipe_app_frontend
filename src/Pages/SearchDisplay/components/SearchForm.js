import React from 'react'
import { Form } from 'react-bootstrap'

const SearchForm = ({ handleOnChange, handleSearch, searchValue }) => {
    return (
        <form onSubmit={handleSearch}>
            <input
                name="text"
                type="text"
                placeholder="Search"
                onChange={handleOnChange}
                value={searchValue}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm
