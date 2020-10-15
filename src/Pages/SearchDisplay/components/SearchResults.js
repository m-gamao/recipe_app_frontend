//     {/* BELOW CODE DISPLAYS THE SEARCH RESULTS**************************** */}
// {/* THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE**************** */}
// {/* Line 21 is the link the user clicks to navigate to the single recipe they choose */}
// This is a class component - you cannot use hooks in a class component.
  // Instead - you have to use the CONNECT function - MSTP/MDTP are dependent on the CONNECT function.

import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../../assets/SearchResults.css';

class SearchResults extends Component {
  render() {
    //debugger
    console.log(this.props.recipesData)
    return (
      <div id="recipes-container">
        {this.props.recipesData.map((hit, index) => (
          <div className="recipe-list" key={index}>
            <h2>{hit.recipe.label}</h2>
            <a href={hit.recipe.url} target="_blank">
              <img src={hit.recipe.image} alt="recipe-thumbnail"/>
            </a>
            <h4>Yield: { hit.recipe.yield }</h4>
          </div>
        ))}
      </div>
    ) 
  };
}

const mapStateToProps = state => ({
  recipesData: state.recipesData
})

export default connect(mapStateToProps, null)(SearchResults);
