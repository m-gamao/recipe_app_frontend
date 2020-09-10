// Recipes.js:
import React from 'react';

const Recipe = props => (
  <div>
    { props.recipe.map((recipe) => {
      return (
        <div key={recipe.recipe_id}>
          <img src={recipe.image_url} alt={recipe.title} />
          <p>{ recipe.title }</p>
        </div>
      );
    })
    }
  </div>
);

export default Recipe;