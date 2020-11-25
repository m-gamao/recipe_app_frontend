// DISPLAYS THE FAVORITES SEARCH RESULTS**************************** 
// THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE**************** 
// Line 21 is the link the user clicks to navigate to the single recipe they choose 
// This is a class component - you cannot use hooks in a class component.
  // Instead - you have to use the CONNECT function - MSTP/MDTP are dependent on the CONNECT function.

  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  
  import '../../../assets/SearchResults.css';
import { filterFavorites } from '../../../Store/reducers/manageFavorites';

// I took out clearFilterResults from the import above

class FavoritesResults extends Component {

    handleSmallYieldFilter = () => {
        const results = this.props.favorites.filter(fav => fav.serving_size < 4)
        this.props.filterFavorites(results)
    }

    handleMediumYieldFilter = () => {
        const results = this.props.favorites.filter(fav => fav.serving_size > 3 && fav.serving_size < 7)
        this.props.filterFavorites(results)
    }

    handleLargeYieldFilter = () => {
        const results = this.props.favorites.filter(fav => fav.serving_size > 6 && fav.serving_size < 11)
        this.props.filterFavorites(results)
    }

    handlePartyYieldFilter = () => {
        const results = this.props.favorites.filter(fav => fav.serving_size > 10)
        this.props.filterFavorites(results)
    }

    handleSortResultsAlphabetically = () => {
        const results = this.props.favorites.sort(function(a, b) {
            if(a.recipe_name.toLowerCase() < b.recipe_name.toLowerCase()) return -1;
            if(a.recipe_name.toLowerCase() > b.recipe_name.toLowerCase()) return 1;
            return 0
        })
        this.props.filterFavorites(results)
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
                            onClick={ this.handleLargeYieldFilter }
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
                    <div className="alphasort_btn">
                        <button 
                            style={{ width: '150px' }}
                            onClick={this.handleSortResultsAlphabetically}
                        >
                            Sort Results (A-B)
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
  
class SortButton extends Component {

    render() {
        
        return (
            <>
                <div className="sort_buttons" style={{ display: 'flex', margin: '50px 0', width: '100%' }}>
                    <div className="sort_btn">
                        <button 
                            style={{ width: '150px' }}
                            onClick={ this.handleSortResultsAlphabetically }
                        >
                            Sort Results Alphabetically
                        </button></div>
                    </div></>
                    )}
}

  const mapStateToProps = state => ({
    favorites: state.favsReducer.favorites,
    results: state.favsReducer.results
  })
  
  export default connect(mapStateToProps, { filterFavorites })(FavoritesResults);
//   also removed clearFilterResults from here too