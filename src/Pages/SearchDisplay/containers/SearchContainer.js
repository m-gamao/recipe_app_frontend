// In ln 30, the jsondata.hits is the hits array inside the json, that I found in the console, after clicking
  // search button on fish.

import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import "../../../assets/SearchContainer.css"

const API_KEY = "a8b915eca4beea848de3ad24d7f69e6b";
const APP_ID = "d7756826";

class SearchContainer extends Component {

// BELOW CODE IS THE SEARCH FORM FOR USER TO ENTER A KEYWORD ********************
  render() {
    return (
      <div id="main">
        <h1>Find a recipe by keyword</h1>
        <SearchForm/>
        {/* <SearchResults recipes={this.state.recipes} /> */}
      </div>
    );
  }
}

export default SearchContainer;

