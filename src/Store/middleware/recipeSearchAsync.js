//THUNK ACTION CREATORS:
// These are all asynchronous calls. Whenever you have a thunk action creator - you are making
// an asynchronous call.
// *recipesData is an object, and inside your state you're expecting an array value - in this case the
// array is 'hits', on line 17 console.log(recipesData.hits)

// Always make sure that the Action Creator that you wish to dispatch is *IMPORTED*, see line 9, line 20.
// This file fetches recipe data from the 3rd Party API that contains all the recipe database.

import { showRecipes } from "../reducers/manageRecipesReducer";


const APP_KEY = "3822eee64683985d4b5cc5935bae9734";
const APP_ID = "3dfa9e92";

export const getRecipes = (query) => {
    return dispatch => {
        return fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(res => res.json())
        .then(recipesData =>{
            dispatch(showRecipes(recipesData.hits))
        })
    }
}  
    
// export const likeRecipe = () => {
//     return dispatch => {
//       const sendableLikeData = {
//          recipe_name: likeData.recipe_id
//         },
//     return fetch("http://localhost:3001/api/v1/favorites",)
//         .then(r => r.json())
//         .then(response => {
//             if (response.error) {
//             alert(response.error)
//             } else {
//             dispatch(addFavorite(response.data))
//             }
//         })
//         .catch(console.log)
//     }
// }  



// export const loadingSearchResults = resultsList => {
//     return (dispatch, getState) => {
//         dispatch(loadingSearchResults())
//         type: LOADING_SEARCH_RESULTS,
//         payload: {
//             resultsList
//         }
//     }
// }
// export const likeRecipe = likeRecipe => {
//     return {
//         type: likeRecipe,
//         payload: {
//             likeRecipe
//         }
//     }
// }
// export const searchFavorites = favSearch => {
//     return {
//         type: SEARCH_FAVORITES,
//         payload: {
//             favSearch
//         }
//     }
// }
// export const loadingFavorites = loadFaves => {
//     return {
//         type: LOADING_FAVORITES,
//         payload: {
//             loadFaves
//         }
//     }
// }
// export const loadingServingSizes = loadSizes => {
//     return {
//         type: LOADING_SERVING_SIZES,
//         payload: {
//             loadSizes
//         }
//     }
// }
