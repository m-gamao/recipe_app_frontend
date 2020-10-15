import { combineReducers } from "redux";
import manageFavorites from "./reducers/manageFavorites";
import manageRecipesReducer from "./reducers/manageRecipesReducer";

export const rootReducer = combineReducers({
    favsReducer: manageFavorites,
    recipesReducer: manageRecipesReducer
})