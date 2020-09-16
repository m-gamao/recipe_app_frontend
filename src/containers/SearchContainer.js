// In ln 30, the jsondata.hits is the hits array inside the json, that I found in the console, after clicking
  // search button on fish.

import React, { Component } from "react";
import "./SearchContainer.css";

const API_KEY = "a8b915eca4beea848de3ad24d7f69e6b";
const APP_ID = "d7756826";

class Search extends Component {
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

// BELOW CODE IS THE SEARCH FIELD FOR USER TO ENTER A KEYWORD ********************
  render() {
    return (
      <div id="main">
        <h1>Find a recipe by keyword</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>

{/* BELOW CODE DISPLAYS THE SEARCH RESULTS**************************** */}
{/* THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE**************** */}
{/* Line 57 is the link the user clicks to navigate to the single recipe they choose */}

        {this.state.recipes ? (
          <div id="recipes-container">
            {this.state.recipes.map((hit, index) => (
              <div class="recipe-list" key={index}>
                <h2>{hit.recipe.label}</h2>
                <a href={hit.recipe.url} target="_blank">
                <img src={hit.recipe.image} alt="recipe-thumbnail" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a recipe</p>
        )}
      </div>
    );
  }
}

export default Search;