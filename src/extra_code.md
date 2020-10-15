Reducers file:
    // likeRecipe: false,
    // loadingRecipes: false

     // case LOADING_RECIPES:
        //     return {
        //         ...state,
        //         searchValue: action.payload.searchValue
        //     }
        // case LIKE_RECIPE:
        //     return {
        //         ...state,
        //         likeRecipe: true 
        //     }
    //     case GET_FAVORITES:
    //         return {
    //             ...state,
    //             favesList: action.payload.favesList
    //         }
    //     case SEARCH_FAVORITES:
    //         return {
    //             ...state,
    //             favSearch: action.payload.favSearch
    //         }
    //     case LOADING_SELECTED_FAVES:
    //         return {
    //             ...state,
    //             SelectedFaves: action.payload.SelectedFaves
    //         }
    //     case LOADING_FAVES_BY_SERVINGS:
    //         return {
    //             ...state,
    //             FavServings: action.payload.FavServings
    //         }

    // const LIKE_RECIPE = "LIKE_RECIPE"
// const GET_FAVORITES = "GET_FAVORITES"
// const SEARCH_FAVORITES = "SEARCH_FAVORITES"
// const LOADING_SELECTED_FAVES = "LOADING_SELECTED_FAVES"
// const LOADING_FAVES_BY_SERVINGS = "LOADING_FAVES_BY_SERVINGS"

export const loadingRecipes = searchValue => {
    return {
        type: LOADING_RECIPES,
        payload: {
            searchValue
        }
    }
}


// // FAVORITES:
// export const likeRecipe = likeRecipe => {
//     return {
//         type: LIKE_RECIPE,
//         payload: {
//             likeRecipe
//         }
//     }
// }
// export const getFavorites = favesList => {
//     return {
//         type: GET_FAVORITES,
//         payload: {
//             favesList
//         }
//     }
// }
// export const searchFavorites = favSearch => {
//     return {
//         type: SEARCH_FAVORITES,
//         payload: {
//             favSearch
//         }
//     }
// }
// export const loadingSelectedFaves = SelectedFaves => {
//     return {
//         type: LOADING_SELECTED_FAVES,
//         payload: {
//             SelectedFaves
//         }
//     }
// }
// export const loadingFavesByServings = FavServings => {
//     return {
//         type: LOADING_FAVES_BY_SERVINGS,
//         payload: {
//             FavServings
//         }
//     }
// }


LIKING stuff:
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


______________________________________________________________

Myfavorites.js extra code:
// import React from 'react'
// import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

// const MyFavorites = props => {
//   const FavoriteCards = props.favorites.length > 0 ?
//     props.favorites.map(t => (<p key={f.id}><Link to={`/favorites/${f.id}`}>{f.attributes.name}</Link></p>)) :
//     null

//   return favoriteCards
// }

// // we provide mapStateToProps to Redux in order to tell Redux:
// // "Excuse me Redux, would you please provide use access to your state
// // so that we may pick and choose the pieces of state we would like availble
// // to this particular component as props."

// const mapStateToProps = state => {
//   return {
//     favorites: state.myFavorites
//   }
// }

// export default connect(null)(MyFavorites)
