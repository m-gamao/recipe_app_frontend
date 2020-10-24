import { addFavorite, loadFavorites } from "../reducers/manageFavorites"

// The getFavoriteRecipes method should produce a list of the favorites matched to the keyword searched by 
// the user.

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