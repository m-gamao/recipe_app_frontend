//event.target.value is the element in the html that you are targeting-the data value that was 
//provided by the user.
//Keep imports in curly braces when you are importing a specific method from the file or library.
//Default exports that are imported get no curly braces.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getServings } from '../../../Store/middleware/ServingsSearchAsync';


const ServingsForm = () => { 
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const handleOnChange = event => {
        setSearch(event.target.value)
    };

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(getServings(search))
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
            <ServingsResults />
        </>
    )
}

export default ServingsForm