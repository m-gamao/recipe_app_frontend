// In ln 30, the jsondata.hits is the hits array inside the json, that I found in the console, after clicking
// search button on fish.

import React, { Component } from "react";
import FavoritesForm from "../components/FavoritesForm";
import "../../../assets/SearchContainer.css";
import FavoritesResults from "../components/FavoritesResults";
import "../../../assets/Main.css";
import "../../../assets/FavoritesContainer.css";

class FavoritesContainer extends Component {
  // BELOW CODE IS THE FAVORITES SEARCH FORM FOR USER TO ENTER QUERY ********************
  render() {
    return (
      <div className="main">
        <h1>Saved Recipes</h1>
        <FavoritesForm />
        <FavoritesResults />
      </div>
    );
  }
}

export default FavoritesContainer;
