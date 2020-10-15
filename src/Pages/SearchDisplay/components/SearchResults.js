//     {/* BELOW CODE DISPLAYS THE SEARCH RESULTS**************************** */}
// {/* THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE**************** */}
// {/* Line 21 is the link the user clicks to navigate to the single recipe they choose */}
// This is a class component - you cannot use hooks in a class component.
  // Instead - you have to use the CONNECT function - MSTP/MDTP are dependent on the CONNECT function.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../assets/SearchResults.css';
import { likeRecipe } from '../../../Store/middleware/favoritesAsync';

class SearchResults extends Component {

  handleLike = event => {
    let { recipe_name, url, image, serving_size } = event.target.parentElement.dataset
    this.props.likeRecipe(recipe_name, url, image, serving_size)
  }  

  render() {

    return (
      <div id="recipes-container">
        {this.props.recipesData.map((hit, index) => (
          <div 
            className="recipe-list" 
            key={index}
            data-recipe_name={hit.recipe.label}
            data-url={hit.recipe.url}
            data-image={hit.recipe.image}
            data-serving_size={hit.recipe.yield}
          >
            <h2>{hit.recipe.label}</h2>
            <a href={hit.recipe.url} target="_blank" rel="noopener noreferrer">
              <img src={hit.recipe.image} alt="recipe-thumbnail"/>
            </a>
            <h4>Yield: { hit.recipe.yield }</h4>
            <button onClick={this.handleLike}>LIKE</button>  
          </div>
        ))}
      </div>
    ) 
  };
}

const mapStateToProps = state => ({
  recipesData: state.recipesReducer.recipesData
})

export default connect(mapStateToProps, { likeRecipe })(SearchResults);
