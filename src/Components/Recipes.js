// Recipes.js in the tutorial video.
// In the Link to pathname, we are grabbing the :id of the recipe (see router file)
// Throughout this file, you have access to the (recipe) array in line 10, so that is
//    what you're seeing throughout, accessing that array.

import React from 'react';
import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
    { props.recipe.map((recipe) => {
      return (
        <div key={recipe.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="recipes__box">
          <img 
            className="recipe__box-img"  
            src={recipe.image_url} 
            alt={recipe.title}/>
            <div className="recipe__text">
              <h5 className="recipes__title">
                { recipe.title.length < 20 ? '${recipe.title}' : '${recipe.title.substring(0, 25)}...'}
              </h5>
              <p className="recipes__subtitle">Publisher: <span>
                { recipe.publisher }
                </span></p>
            </div>
            <button className="recipe_buttons">
              <Link to={{ 
                pathname: '/recipe/${recipe.recipe_id}',
                state: { recipe: recipe.title }
             }}>View Recipe</Link>
            </button>
        </div>
        </div>
      );
    })}
    </div>
  </div>
);

export default Recipe;