// This fetches the API data on recipes and renders a list via components.

// (e) is the event obj in JS. This event obj means we can access the properties from it. (line 10) 
// line 10- you're targeting the attribute 'recipeName' (element/property) data entered by user 
// in the Form on Form.js. And here, we are accessing that 'value' that was submitted by user.
// Whatver we get from the API is going to be stored in the data constant below. 
// The things in componentDidUpdate will happen as soon as the component is updated (when
  // the state changes).
// LocalStorage only takes strings/json which is one big string. (no objects/arrays/numbers,etc)  
  //So, you are providing "recipes" to it in a string "" as the first argument.
  //The 2nd argument is the actual thing that you want to store.
//Line 39, you are setting this.setState to the recipes:[] array above .
import React, { Component } from 'react';
import './App.css';
import App from '../App';
import Form from './Form';
import Recipe from './components/Recipe';

const API_KEY = "a8b915eca4beea848de3ad24d7f69e6b";
const APP_ID = "d7756826";

class RecipeSearch extends Component {
  state = {
    recipes: []
  }
  getRecipe = query => {

    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
      debugger
    })
    this.setState({ recipes: data.recipes });
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <h1 className="Search-title">Find a Recipe!</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipe={this.state.recipes} />
      </div>
    );
  }
}
export default RecipeSearch;