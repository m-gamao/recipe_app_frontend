// In ln 30, the jsondata.hits is the hits array inside the json, that I found in the console, after clicking
  // search button on fish.

import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import "./SearchContainer.css";

const API_KEY = "a8b915eca4beea848de3ad24d7f69e6b";
const APP_ID = "d7756826";

class SearchContainer extends Component {
  state = {
    searchValue: "",
    recipes: []
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.getRecipe(this.state.searchValue);
  };

  getRecipe = query => {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ recipes: jsonData.hits });
      });
  };

// BELOW CODE IS THE SEARCH FORM FOR USER TO ENTER A KEYWORD ********************
  render() {
    return (
      <div id="main">
        <h1>Find a recipe by keyword</h1>
        <SearchForm 
          handleOnChange={this.handleOnChange} 
          handleSearch={this.handleSearch}
          searchValue={this.state.searchValue} 
        />
        <SearchResults recipes={this.state.recipes} />
      </div>
    );
  }
}

export default SearchContainer;