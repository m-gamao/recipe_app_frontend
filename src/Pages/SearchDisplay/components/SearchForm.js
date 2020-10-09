import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../../Store/middleware/recipeSearchAsync';

const SearchForm = () => { 
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const handleOnChange = event => {
        setSearch(event.target.value)
    };

    const handleSearch = () => {
        dispatch(getRecipes(search))
        setSearch("")
    };
    
    return (
        <form onSubmit={handleSearch}>
            <input
                name="search"
                type="search"
                placeholder="Search"
                onChange={handleOnChange}
                value={search}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm
