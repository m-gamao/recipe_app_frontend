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
// THERE ARE NO FETCHES IN THE REDUCER.

// REDUCERS **********************
const initialState = {
    recipes: [],
    searchValue: '',
    likeRecipe: false,
    loadingRecipes: false
}

export default function manageRecipesReducer(state = initialState, action) {
    switch(action.type) {
        case LOADING_RECIPES:
            return {
                ...state,
                searchValue: action.payload.searchValue
            }
        case SHOW_RECIPES:
            return {
                ...state,
                recipes: action.payload.recipes
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
const LOADING_RECIPES = "LOADING_RECIPES"
const SHOW_RECIPES = "SHOW_RECIPES"
const LIKE_RECIPE = "LIKE_RECIPE"
const GET_FAVORITES = "GET_FAVORITES"
const SEARCH_FAVORITES = "SEARCH_FAVORITES"
const LOADING_SELECTED_FAVES = "LOADING_SELECTED_FAVES"
const LOADING_FAVES_BY_SERVINGS = "LOADING_FAVES_BY_SERVINGS"

//ACTION CREATORS- these are functions that returns a 'type' and 'payload' (which represent the target)
// *Target means property in your state. 
// Synchronous actions.
// The difference from thunk is - Action creators return objects, and Thunk creators return functions.

// RECIPE SEARCH:
export const loadingRecipes = searchValue => {
    return {
        type: LOADING_RECIPES,
        payload: {
            searchValue
        }
    }
}
export const showRecipes = (recipes) => {
    return {
        type: SHOW_RECIPES,
        payload: {
            recipes
        }
    }
}


// FAVORITES:
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
