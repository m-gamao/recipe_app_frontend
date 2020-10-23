// import { act } from "react-dom/test-utils"
// This reducer file is set up in the "Duck Pattern", where you put all related code in one file 
// so that you don't have to create a lot of files and code so many imports and exports. This file 
// contains the: initial state, action types, pure function, and action creators.

// Process: Your reducer (line 22) is listening for a dispatch. Once the dispatch is made, the
// action creator's "action type" is checked against the cases in the switch case block within the 
// reducer. Once it finds a match, it returns logic that updates the state in the store. Inside of 
// the logic that is being returned (ie Lines 28-31),


//****INITIAL STATE******************************************************************** */
const initialState = {
    favorites: [],
    results: []
}

//****ACTION TYPES****************************************************************************** */
const LOAD_FAVORITES = "LOAD_FAVORITES"
const ADD_FAVORITE = "ADD_FAVORITE"
const FILTER_FAVORITES = "FILTER_FAVORITES"


//***REDUCER (aka PURE FUNCTION)************************************************************* */
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


//****ACTION CREATORS************************************************************************** */
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






