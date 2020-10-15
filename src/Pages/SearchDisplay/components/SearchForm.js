// This is a presentational component.
// line 9 - destructuring the useState hook- takes 2 elements- 1. A variable (search) that 
// the useState is set to,
// and 2. A function (setSearch): how you trigger a page/component re-render.
// Search takes a default value of what's passed into the useState method in ("") on line 16. And then it
// changes according to what you pass into the setSearch method.
// Tip: always understand "what triggers a page re-render/component re-render"
// useDispatch- allows you to skip out on using connect/mapdispatchtoprops. it's newer.
//line 25: setSearch is then set to an empty string (""), after user submitted a query value, 
//to clear that search field.
// onSubmit and onChange are event listeners that take in your custom functions of handleOnChange and
// handleSearch.
// This is a controlled form. 


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../../Store/middleware/recipeSearchAsync';
import SearchResults from './SearchResults';

const SearchForm = () => { 
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const handleOnChange = event => {
        setSearch(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(getRecipes(search))
        setSearch("")
    };
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="search"
                    type="search"
                    placeholder="Search"
                    onChange={handleOnChange}
                    value={search}
                />
                <button type="submit">Search</button>
            </form>
            <SearchResults />
        </>
    )
}

export default SearchForm
