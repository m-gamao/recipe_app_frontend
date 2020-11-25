// In this file, the redux thunk action does two things:
   // 1. You dispatch a fetch. It GETS data from backend or POSTS data to backend. (DISPATCH 1)
   // 2. You dispatch an action creator from the reducer file. 
      // 2a. When the backend is updated (and json is returned), it dispatches an update to 
          // the frontend/store), via a reducer.(DISPATCH 2) 
            // -The reducer function is a result of the action creator in the reducer file.)

import { addFavorite, loadFavorites } from "../reducers/manageFavorites"

// The getFavoriteRecipes method should produce a list of the favorites matched to the keyword 
   // searched by the user.

export const getFavoriteRecipes = () => {
    return dispatch => {
        fetch('http://localhost:3001/api/v1/favorites')
            .then(res => res.json())
            .then(data => {
                dispatch(loadFavorites(data))
            })
    }
}

export const likeRecipe = (recipe_name, url, image, serving_size) => {
    return dispatch => {
        const data = {
            recipe_name,
            url,
            image,
            serving_size
        }
        fetch('http://localhost:3001/api/v1/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            dispatch(addFavorite(data))     
        })
    }
}