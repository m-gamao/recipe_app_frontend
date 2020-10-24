
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterFavorites } from '../../../Store/reducers/manageFavorites';

const FavoritesForm = () => { 
    const [search, setSearch] = useState("")
    const state = useSelector(state => ({
        favorites: state.favsReducer.favorites
    }))
    const dispatch = useDispatch()

    const handleOnChange = event => {
        setSearch(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault()
        const results = state.favorites.filter(fav => {
            return fav.recipe_name.includes(search)
        })
        dispatch(filterFavorites(results))
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
        </>
    )
}

export default FavoritesForm
