// import { act } from "react-dom/test-utils"

const initialState = {
    favorites: [],
    results: []
}

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
        case CLEAR_FILTER_RESULTS:
            return {
                results: action.payload.results
            }
        default: 
            return state;
    }
} 

//ACTION TYPES
const LOAD_FAVORITES = "LOAD_FAVORITES"
const ADD_FAVORITE = "ADD_FAVORITE"
const FILTER_FAVORITES = "FILTER_FAVORITES"
const CLEAR_FILTER_RESULTS = "CLEAR_FILTER_RESULTS"

//ACTION CREATORS
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

export const smallYield = favorites => {
    return {
        type: FILTER_FAVORITES,
        payload: {
            results: favorites.filter(fav => fav.serving_size <= 3)
        }
    }
}

export const mediumYield = favorites => {
    return {
        type: FILTER_FAVORITES,
        payload: {
            results: favorites.filter(fav => fav.serving_size >= 4 || fav.serving_size <= 6)
        }
    }
}

export const largeYield = favorites => {
    return {
        type: FILTER_FAVORITES,
        payload: {
            results: favorites.filter(fav => fav.serving_size >= 7 || fav.serving_size <= 10)
        }
    }
}

export const partyYield = favorites => {
    return {
        type: FILTER_FAVORITES,
        payload: {
            results: favorites.filter(fav => fav.serving_size >= 11)
        }
    }
}

export const clearFilterResults = () => {
    return {
        type: CLEAR_FILTER_RESULTS,
        payload: {
            results: []
        }
    }
}












