// DISPLAYS THE FAVORITES SEARCH RESULTS**************************** 
// THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE**************** 
// Line 21 is the link the user clicks to navigate to the single recipe they choose 
// This is a class component - you cannot use hooks in a class component.
  // Instead - you have to use the CONNECT function - MSTP/MDTP are dependent on the CONNECT function.

  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  
  import '../../../assets/SearchResults.css';
import { clearFilterResults, largeYield, mediumYield, partyYield, smallYield } from '../../../Store/reducers/manageFavorites';
  
class FavoritesResults extends Component {

    handleSmallYieldFilter = () => {
        this.props.clearFilterResults()
        this.props.smallYield(this.props.favorites)
    }

    handleMediumYieldFilter = () => {
        this.props.clearFilterResults()
        this.props.mediumYield(this.props.favorites)
    }

    handleLargeYieldFilter = () => {
        this.props.clearFilterResults()
        this.props.largeYield(this.props.favorites)
    }

    handlePartyYieldFilter = () => {
        this.props.clearFilterResults()
        this.props.partyYield(this.props.favorites)
    }

    render() {
        
        return (
            <>
                <div className="sort_buttons" style={{ display: 'flex', margin: '50px 0', width: '100%' }}>
                    <div className="sort_btn">
                        <button 
                            style={{ width: '150px' }}
                            onClick={ this.handleSmallYieldFilter }
                        >
                            Small (1-3)
                        </button>
                    </div>
                    <div className="sort_btn">
                        <button 
                            style={{ width: '150px' }}
                            onClick={ this.handleMediumYieldFilter }
                        >
                            Medium (4-6)
                        </button>
                    </div>
                    <div className="sort_btn">
                        <button 
                            style={{ width: '150px' }}
                            onClick={this.handleLargeYieldFilter}
                        >
                            Large (7-10)
                        </button>
                    </div>
                    <div className="sort_btn">
                        <button 
                            style={{ width: '150px' }}
                            onClick={this.handlePartyYieldFilter}
                        >
                            Party (11+)
                        </button>
                    </div>
                </div>
                <div id="recipes-container">
                {this.props.results.map((recipe, index) => (
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
    favorites: state.favsReducer.favorites,
    results: state.favsReducer.results
  })
  
  export default connect(mapStateToProps, { smallYield, mediumYield, largeYield, partyYield, clearFilterResults })(FavoritesResults);
  