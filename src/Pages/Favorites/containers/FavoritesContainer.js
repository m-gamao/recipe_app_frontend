// In ln 30, the jsondata.hits is the hits array inside the json, that I found in the console, after clicking
// search button on fish.

import React, { Component } from "react";
import FavoritesForm from "../components/FavoritesForm";
import "../../../assets/SearchContainer.css";
import FavoritesResults from "../components/FavoritesResults";
import "../../../assets/Main.css";

class FavoritesContainer extends Component {
  // BELOW CODE IS THE FAVORITES SEARCH FORM FOR USER TO ENTER QUERY ********************
  render() {
    return (
      <div id="main">
        <h1>Find a favorite by keyword</h1>
        <FavoritesForm />
        <FavoritesResults />
      </div>
    );
  }
}

export default FavoritesContainer;
