//REDUCER SETUP- The reducer takes 2 arguments (the initial state, and the action(which any user event
// that occurs. Inside the reducer function is a switch case. The switch takes a condition
// called 'action.type'- this is the value that you listen for to determine what action should be
// dispatched. Once that action is dispatched, it returns an object (ln 14) including the change to 
// be made. 
// Line 16- The spread operator (...) copies the initial state to save it in case you need it later.
// I am following the duck pattern- putting all related code into one file to eliminate a lot of 
// importing and exporting.
// likeRecipe is a boolean. it's either true or false.
// This file contains 3 parts: 1) Reducers, and 2) Action Types, and 3) Action Creators.


// REDUCERS **********************
const initialState = {
    recipes: [],
    searchValue: '',
    resultsList: [],
    likeRecipe: false
}

export default function manageRecipesReducer(state = initialState, action) {
    switch(action.type) {
        case SET_RECIPE:
            return {
                ...state,
                searchValue: action.payload.searchValue
            }
        case LOADING_SEARCH_RESULTS:
            return {
                ...state,
                resultsList: action.payload.resultsList
            }
        case LIKE_RECIPE:
            return {
                ...state,
                likeRecipe: true 
            }
        case GET_FAVORITES:
            return {
                ...state,
                favesList: action.payload.favesList
            }
        case SEARCH_FAVORITES:
            return {
                ...state,
                favSearch: action.payload.favSearch
            }
        case LOADING_SELECTED_FAVES:
            return {
                ...state,
                SelectedFaves: action.payload.SelectedFaves
            }
        case LOADING_FAVES_BY_SERVINGS:
            return {
                ...state,
                FavServings: action.payload.FavServings
            }
        default:
            return state
    }
}

//ACTION TYPES- is what you will pass into your action creators and use in your cases.
const SET_RECIPE = "SET_RECIPE"
const LOADING_SEARCH_RESULTS = "LOADING_SEARCH_RESULTS"
const LIKE_RECIPE = "LIKE_RECIPE"
const GET_FAVORITES = "GET_FAVORITES"
const SEARCH_FAVORITES = "SEARCH_FAVORITES"
const LOADING_SELECTED_FAVES = "LOADING_SELECTED_FAVES"
const LOADING_FAVES_BY_SERVINGS = "LOADING_FAVES_BY_SERVINGS"

//ACTION CREATORS- these are functions that returns a 'type' and 'payload' (which represent the target)
// *Target means property in your state. 
// Synchronous actions.
// The difference from thunk is - Action creators return objects, and Thunk creators return functions.
export const setRecipe = searchValue => {
    return {
        type: SET_RECIPE,
        payload: {
            searchValue
        }
    }
}
export const loadingSearchResults = resultsList => {
    return {
        type: LOADING_SEARCH_RESULTS,
        payload: {
            resultsList
        }
    }
}
export const likeRecipe = likeRecipe => {
    return {
        type: LIKE_RECIPE,
        payload: {
            likeRecipe
        }
    }
}
export const getFavorites = favesList => {
    return {
        type: GET_FAVORITES,
        payload: {
            favesList
        }
    }
}
export const searchFavorites = favSearch => {
    return {
        type: SEARCH_FAVORITES,
        payload: {
            favSearch
        }
    }
}
export const loadingSelectedFaves = SelectedFaves => {
    return {
        type: LOADING_SELECTED_FAVES,
        payload: {
            SelectedFaves
        }
    }
}
export const loadingFavesByServings = FavServings => {
    return {
        type: LOADING_FAVES_BY_SERVINGS,
        payload: {
            FavServings
        }
    }
}
