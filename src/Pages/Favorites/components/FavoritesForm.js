// "useSelector" is a hook that allows you to operate like mapStatetoProps.  It allows
//you to go into store and get the slice of state of want. In this case it is
//updating your favorites.
// const search is a string, and setSearch allows you to update that string.
//It is like setState.
// favsReducer is the alias you gave to the favorites reducer.
//You declared it in the rootReducer.js file in the Store folder.

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFavorites } from "../../../Store/reducers/manageFavorites";

const FavoritesForm = () => {
  const [search, setSearch] = useState("");
  const state = useSelector((state) => ({
    favorites: state.favsReducer.favorites,
  }));
  const dispatch = useDispatch();

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  // The Question Mark waits for the present value.
  const handleSubmit = (event) => {
    event.preventDefault();
    const results = state.favorites.filter((fav) => {
      console.log(fav);
      return fav.recipe_name?.includes(search);
    });
    dispatch(filterFavorites(results));
    setSearch("");
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
  );
};

export default FavoritesForm;
