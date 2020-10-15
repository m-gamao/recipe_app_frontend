const initialState = {
    favorites: []
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
        default: 
            return state
    }
} 

//ACTION TYPES
const LOAD_FAVORITES = "LOAD_FAVORITES"
const ADD_FAVORITE = "ADD_FAVORITE"

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