// STEP 1: Create the Action Creators
// STEP 2: Create the Reducers - you are passing the action creators to the reducers. The actions
  // obviously must first be "created". And then they are passed to reducers in the form of 
  // action types.

// import { act } from "react-dom/test-utils"
// This reducer file is set up in the "Duck Pattern", where you put all related code in one file 
// so that you don't have to create a lot of files and code so many imports and exports. This file 
// contains the: initial state, action types, pure function, and action creators.

// Process: The reducer (line 32) is listening for a dispatch. Once the dispatch is made, the
// action creator's "action type" is checked against the cases in the switch case block within the 
// reducer. Once it finds a match, it returns logic that updates the state in the store, based 
  // on the payload passed in (ie. lines 28-31). Payload is the data being sent by the action 
  // to update the store.

// Each case represents an action type.


//INITIAL STATE*********************************************************************/
const initialState = {
    favorites: [],
    results: []
}

//ACTION TYPES**(Serves as a reference for naming)*************************************************************************** */
const LOAD_FAVORITES = "LOAD_FAVORITES"
const ADD_FAVORITE = "ADD_FAVORITE"
const FILTER_FAVORITES = "FILTER_FAVORITES"

//STEP 2: REDUCER (aka PURE FUNCTION)************************************************************** */
export default function manageFavorites(state = initialState, action) {
    switch(action.type) {
        case LOAD_FAVORITES:
            return {
                ...state,
                favorites: action.payload.favorites
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [action.payload.favorite, ...state.favorites]
            }
        case FILTER_FAVORITES:
            return {
                ...state,
                results: action.payload.results
            }
        default: 
            return state;
    }
} 


//STEP 1: ACTION CREATORS ************************************************************************* */
export const loadFavorites = favorites => {
    return {
        type: LOAD_FAVORITES,
        payload: {
            favorites
        }
    }
}

export const addFavorite = favorite => {
    return {
        type: ADD_FAVORITE,
        payload: {
            favorite
        }
    }
}

export const filterFavorites = results => {
    return {
        type: FILTER_FAVORITES,
        payload: {
            results
        }
    }
}






