// DISPLAYS THE FAVORITES SEARCH RESULTS**************************** 
// THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE**************** 
// Line 21 is the link the user clicks to navigate to the single recipe they choose 
// This is a class component - you cannot use hooks in a class component.
  // Instead - you have to use the CONNECT function - MSTP/MDTP are dependent on the CONNECT function.

  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  
  import '../../../assets/SearchResults.css';
  
  class FavoritesResults extends Component {
    render() {
      return (
        <>
            <div className="sort_buttons">
                <button>Small (1-3)</button>
                <button>Medium (4-6)</button>
                <button>Large (7-10)</button>
                <button>Party (11+)</button>
            </div>
            <div id="recipes-container">
            {this.props.favorites.map((recipe, index) => (
                <div className="recipe-list" key={index}>
                <h2>{recipe.recipe_name}</h2>
                <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                    <img src={recipe.image} alt="recipe-thumbnail"/>
                </a>
                <h4>Yield: { recipe.serving_size }</h4>
                </div>
            ))}
            </div>
        </>
      ) 
    };
  }
  
  const mapStateToProps = state => ({
    favorites: state.favsReducer.favorites
  })
  
  export default connect(mapStateToProps, null)(FavoritesResults);
  