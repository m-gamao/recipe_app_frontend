// We made this a class based component because we're going to make use of state in 
  // this component... activeRecipe.
// Lifecycle Hook - componentdidmount - this method fires as soon as class Recipe component
  // gets loaded/mounted onto the web browser. Which explains the name of it. So, 
  // anything that happens inside of componentDidMount is going to happen as soon as 
  // the Recipe component gets loaded on the screen. It's going to be similar to what we
  // did in the RecipeSearch.js file.
import React, { Component } from 'react';

const API_KEY = "a8b915eca4beea848de3ad24d7f69e6b";
const APP_ID = "d7756826";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = () => {
    const title = this.props.location.state.recipe;
    const api_call = await fetch('https://api.edamam.com/search?q=app_id=${APP_ID}&app_key=${YOUR_APP_KEY}&q=${title}')

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
  }
  render() {
      console.log(this.props);
      return (
        <div>Recipe Component!</div>
      )
    }
    
};

export default Recipe;
