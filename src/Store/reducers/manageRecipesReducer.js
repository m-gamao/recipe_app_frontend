//REDUCER SETUP- The reducer contains a Switch/case block. It takes 2 arguments (the initial state, and the action(which any user event
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

// ***REDUCERS **********************
const initialState = {
  recipesData: [],
  faveRecipeData: [],
};

export default function manageRecipesReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_RECIPES:
      return {
        ...state,
        recipesData: action.payload.recipesData,
      };
    case SHOW_FAVORITES:
      return {
        ...state,
        faveRecipeData: action.payload.faveRecipeData,
      };

    default:
      return state;
  }
}

//***ACTION TYPES- is what you will pass into your action creators and use in your cases.
const SHOW_RECIPES = "SHOW_RECIPES";
const SHOW_FAVORITES = "SHOW_FAVORITES";

//***ACTION CREATORS- these are functions that returns a 'type' and 'payload'
//(which represent the target)
// *Target means property in your state.
// Synchronous actions.
// The difference from thunk is - Action creators return objects, and Thunk creators return
//functions.
// For recipe search:
export const showRecipes = (recipesData) => {
  return {
    type: SHOW_RECIPES,
    payload: {
      recipesData,
    },
  };
};
export const showFavorites = (faveRecipesData) => {
  return {
    type: SHOW_FAVORITES,
    payload: {
      faveRecipesData,
    },
  };
};
