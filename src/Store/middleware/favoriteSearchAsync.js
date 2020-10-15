//THUNK ACTION CREATORS:
// These are all asynchronous calls. Whenever you have a thunk action creator - you are making
// an asynchronous call.
// *recipesData is an object, and inside your state you're expecting an array value - in this case the
// array is 'hits', on line 17 console.log(recipesData.hits)

// Always make sure that the Action Creator that you wish to dispatch is *IMPORTED*, see line 9, line 20.


import { showFavorites } from "../reducers/manageRecipesReducer";

export const getFavorites = (query) => {
    return dispatch => {
        return fetch(`https://localhost:3000/api/v1/favorites`)
        .then(res => res.json())
        .then(faveRecipeData =>{
            dispatch(showFavorites(faveRecipeData.hits))
        })
    }
}  