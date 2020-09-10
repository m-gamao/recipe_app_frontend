// Form.js:
import React from 'react';

// this is a stateless functional component because it doesn't need any state. 
// so it doesn't need to be a class based component.
// implicitly return some jsx here. 
// the props is referring to 'getRecipe' on line 16 in /recipesearch.js: <Form getRecipe={this.getRecipe}/>
// props here is an object.

const Form = props => (
  <form onSubmit={props.getRecipe}>
    <input type = "text" name="recipeName"/>
      <button>Search</button>
  </form>
)

export default Form;