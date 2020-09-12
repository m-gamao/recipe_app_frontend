// Form.js:
import React, { useState } from 'react';

// this is a stateless functional component because it doesn't need any state. 
// so it doesn't need to be a class based component.
// implicitly return some jsx here. 
// the props is referring to 'getRecipe' on line 16 in /recipesearch.js: <Form getRecipe={this.getRecipe}/>
// props here is an object.

const Form = props => {
  const [recipeName, setRecipeName] = useState('')

  const handleChange = event => {
    setRecipeName(event.target.value)
  }

  const handleSubmit = event => {
    props.getRecipe(recipeName)
    setRecipeName('')

    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type = "text" name="recipeName" value={recipeName}/>
      <button>Search</button>
    </form>
  )
}
  

export default Form;