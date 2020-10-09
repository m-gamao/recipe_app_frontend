//     {/* BELOW CODE DISPLAYS THE SEARCH RESULTS**************************** */}
// {/* THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE**************** */}
// {/* Line 21 is the link the user clicks to navigate to the single recipe they choose */}

import React, { Component } from 'react';
import '../../../assets/SearchResults.css';

class SearchResults extends Component {
  state = {
    liked: false
  }
// const SearchResults = ({ recipes }) => {

  render() {
    const changeColor = this.state.liked ? "red" : "grey"
    return (
      <div id="recipes-container">
        {this.props.recipes.map((hit, index) => (
          <div className="recipe-list" key={index}>
            <h2>{hit.recipe.label}</h2>
            <a href={hit.recipe.url} target="_blank">
              <img src={hit.recipe.image} alt="recipe-thumbnail"/>
            </a>
          </div>
        ))}
      </div>
    ) 
  };
}
export default SearchResults;
