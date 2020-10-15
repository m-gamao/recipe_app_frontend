
import React, { useState } from 'react';
//import { useDispatch } from 'react-redux';
import FavoritesResults from './FavoritesResults';

const FavoritesForm = () => { 
    const [search, setSearch] = useState("")
    //const dispatch = useDispatch()

    const handleOnChange = event => {
        setSearch(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault()
        //dispatch(getFavorites(search))
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
            <FavoritesResults />
        </>
    )
}

export default FavoritesForm
