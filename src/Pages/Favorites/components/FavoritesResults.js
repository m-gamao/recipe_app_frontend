// DISPLAYS THE FAVORITES SEARCH RESULTS****************************
// THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE****************
// The user clicks to navigate to the single recipe they choose.
// This is a class component - you cannot use hooks in a class component.
// Instead - you have to use the CONNECT function - MSTP/MDTP are dependent on the CONNECT function.
// The properties for <Recipe/> gets established in this file on line 112. You are pulling in the
// data from the backend rails app, using the names from the db tables, then setting that data to new
// prop names, which you will then pass to the Recipe.js component.

import React, { Component } from "react";
import { connect } from "react-redux";

import "../../../assets/SearchResults.css";
import { filterFavorites } from "../../../Store/reducers/manageFavorites";
import Recipe from "./Recipe";

// I took out clearFilterResults from the import above

class FavoritesResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // change code above this line

  handleSmallYieldFilter = () => {
    const results = this.props.favorites.filter((fav) => fav.serving_size < 4);
    this.props.filterFavorites(results);
  };

  handleMediumYieldFilter = () => {
    const results = this.props.favorites.filter(
      (fav) => fav.serving_size > 3 && fav.serving_size < 7
    );
    this.props.filterFavorites(results);
  };

  handleLargeYieldFilter = () => {
    const results = this.props.favorites.filter(
      (fav) => fav.serving_size > 6 && fav.serving_size < 11
    );
    this.props.filterFavorites(results);
  };

  handlePartyYieldFilter = () => {
    const results = this.props.favorites.filter((fav) => fav.serving_size > 10);
    this.props.filterFavorites(results);
  };

  handleSortResultsAlphabetically = () => {
    const results = this.props.favorites.sort(function (a, b) {
      if (a.recipe_name.toLowerCase() < b.recipe_name.toLowerCase()) return -1;
      if (a.recipe_name.toLowerCase() > b.recipe_name.toLowerCase()) return 1;
      return 0;
    });
    this.props.filterFavorites(results);
  };

  render() {
    return (
      <>
        <div
          className="sort_buttons"
          style={{ display: "flex", margin: "50px 0", width: "100%" }}
        >
          <div className="sort_btn">
            <button
              style={{ width: "150px" }}
              onClick={this.handleSmallYieldFilter}
            >
              Small (1-3)
            </button>
          </div>
          <div className="sort_btn">
            <button
              style={{ width: "150px" }}
              onClick={this.handleMediumYieldFilter}
            >
              Medium (4-6)
            </button>
          </div>
          <div className="sort_btn">
            <button
              style={{ width: "150px" }}
              onClick={this.handleLargeYieldFilter}
            >
              Large (7-10)
            </button>
          </div>
          <div className="sort_btn">
            <button
              style={{ width: "150px" }}
              onClick={this.handlePartyYieldFilter}
            >
              Party (11+)
            </button>
          </div>
          <div className="alphasort_btn">
            <button
              style={{ width: "150px" }}
              onClick={this.handleSortResultsAlphabetically}
            >
              Sort Results (A-B)
            </button>
          </div>
        </div>
        <div id="recipes_container">
          <div className="recipe_list">
            {this.props.results.map((recipe, index) => (
              <Recipe
                key={recipe.id}
                name={recipe.recipe_name}
                image={recipe.image}
                url={recipe.url}
                servingSize={recipe.serving_size}
                likes={recipe.likes}
                favorite_id={recipe.id}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

//"favorites" is called in the favoritesForm.js where you are reaching into state.
const mapStateToProps = (state) => ({
  favorites: state.favsReducer.favorites,
  results: state.favsReducer.results,
});

export default connect(mapStateToProps, { filterFavorites })(FavoritesResults);
//   also removed clearFilterResults from here too
