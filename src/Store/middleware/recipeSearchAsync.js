//THUNK ACTION CREATORS:
// These are all asynchronous calls. Whenever you have a thunk action creator - you are making
// an asynchronous call.

import { loadingRecipes, addRecipes } from "../reducers/manageRecipesReducer"


const APP_KEY = "a8b915eca4beea848de3ad24d7f69e6b";
const APP_ID = "d7756826";

export const getRecipeThunk = (query) => {
    return dispatch => {
        dispatch(loadingRecipes())
        return fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then(r => r.json())
        .then(response => {
            debugger
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(addRecipes(response.data))
            }
        })
        .catch(console.log)
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
