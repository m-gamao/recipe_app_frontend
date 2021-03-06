// STEP 1: Create the Action Creators
// STEP 2: Create the Reducers - you are passing the action creators to the reducers. The actions
// obviously must first be "created". And then they are passed to reducers in the form of
// action types.

// This reducer file is set up in the "Duck Pattern", where you put all related code in one file
// so that you don't have to create a lot of files and code so many imports and exports. This file
// contains the: initial state, action types, pure function, and action creators.

// Process: The reducer is listening for a dispatch. Once the dispatch is made, the
// action creator's "action type" is checked against the cases in the switch case block within the
// reducer. Once it finds a match, it returns logic that updates the state in the store, based
// on the payload passed in (ie. lines 28-31). Payload is the data being sent by the action
// to update the store.

//INITIAL STATE*********************************************************************/
const initialState = {
  favorites: [],
  results: [],
  likes: [],
};

//ACTION TYPES**(Serves as a reference for naming)*************************************************************************** */
const LOAD_FAVORITES = "LOAD_FAVORITES";
const ADD_FAVORITE = "ADD_FAVORITE";
const FILTER_FAVORITES = "FILTER_FAVORITES";
const FAVORITE_LIKED = "FAVORITE_LIKED";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

//STEP 2: REDUCER (aka PURE FUNCTION)************************************************************** */
export default function manageFavorites(state = initialState, action) {
  switch (action.type) {
    case LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload.favorites,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.payload.favorite, ...state.favorites],
      };
    case FILTER_FAVORITES:
      return {
        ...state,
        results: action.payload.results,
      };
    case FAVORITE_LIKED:
      return {
        ...state,
        likes: [...state.likes, action.payload.like],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: action.payload.favorites,
      };
    default:
      return state;
  }
}

// any changes made to state invokes a page re-render reflecting all of the new changes
//(i.e action.payload)

//STEP 1: ACTION CREATORS ************************************************************************* */
// The action creators below get passed down to child components as props (see the favoritesresults.js file)
export const loadFavorites = (favorites) => {
  return {
    type: LOAD_FAVORITES,
    payload: {
      favorites,
    },
  };
};

export const addFavorite = (favorite) => {
  return {
    type: ADD_FAVORITE,
    payload: {
      favorite,
    },
  };
};

export const filterFavorites = (results) => {
  return {
    type: FILTER_FAVORITES,
    payload: {
      results,
    },
  };
};

export const favoriteLiked = (like) => {
  return {
    type: FAVORITE_LIKED,
    payload: {
      like,
    },
  };
};

// WORKING ON A SOLUTION FOR THE DELETE SAVES FUNCTION:
// export const removeFavoriteSync = (favToDelete, allFavorites) => {
//   const results = allFavorites.filter((fav) => fav.id !== favToDelete.id);
//   return {
//     type: REMOVE_FAVORITE,
//     payload: {
//       favorites: results,
//     },
//   };
// };

//NOTES:
// Actions are the only source of information for the store as per Redux official documentation.
// An action carries a payload of information from your application to store.
// Actions are plain JavaScript objects that must have a type attribute to indicate the
// type of action performed.

// Each Case in the switch/case block represents an action type:
// *Load Favorites: loads the favorites you searched for on the page.
// *Add Favorites: posts the favorites that you added to the favorites table in the database.
// *Filter Favorites: filters the items in the favorites table by yield size.
