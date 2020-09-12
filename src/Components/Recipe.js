// This fetches ONE RECIPE that the user has chosen, and displays it.
// ****I need to add the actual recipe to this.

// We made this a class based component because we're going to make use of state in 
  // this component... activeRecipe.
// Lifecycle Hook - componentdidmount - this method fires as soon as class Recipe component
  // gets loaded/mounted onto the web browser. Which explains the name of it. So, 
  // anything that happens inside of componentDidMount is going to happen as soon as 
  // the Recipe component gets loaded on the screen. It's going to be similar to what we
  // did in the RecipeSearch.js file.
// We are getting state.recipe (ln 19) from the recipe.js file where we set up the state.recipe.
  // req stands for request, res stands for response, when dealing with the json.
// In the render, it checks to see if the array is not = 0, and if so, it will display the info.    
// 'Link to' button takes you back to the home page. Use the path (stored in router)
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const API_KEY = "a8b915eca4beea848de3ad24d7f69e6b";
const APP_ID = "d7756826";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  }
  componentDidMount = () => {
    const title = this.props.location.state.recipe;
    const req = await fetch('https://api.edamam.com/search?q=app_id=${APP_ID}&app_key=${APP_KEY}&q=${title}')

    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0]})
    // console.log(this.state.activeRecipe);
    // console.log(response.recipes[0]);
    // this.setState({ recipes: data.recipes });
  }
  render() {
      const recipe =  this.state.activeRecipe;
      return (
        <div className="container">
          {this.state.activeRecipe.length !== 0 &&
            <div className="active-recipe">
            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__add">{recipe.addRecipe}</h4>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
          }
        </div> 
      )
    }
    
};

export default Recipe;
