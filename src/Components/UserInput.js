// NOT USING THIS FILE!!!!!!!!!!!!!!!  ** NOW DEFUNCT ** 
import React, { useState } from 'react';

// this is a stateless functional component because it doesn't need any state. 
// so it doesn't need to be a class based component.
// implicitly return some jsx here. 
// the props is referring to 'getRecipe' on line 16 in /FetchList.js: <Form getRecipe={this.getRecipe}/>
// props here is an object.

const UserInput = props => {
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
      <input onChange={handleChange} type = "text" name="text" placeholder="Search" value={recipeName}/>
      <button>Search</button>
    </form>
  )
}
  

export default UserInput;

//   <div className="Search">
//  <div> 
// <form id= "Keyword-search">

//     <label>Enter Recipe Keyword: </label>
//     <input
//       name="text"
//       type="text"
//       placeholder="Search"
//       onChange={event => this.handleOnChange(event)}
//       value={this.state.searchValue}/>

//     <button onClick={this.handleSearch}>Search</button>
// </form> 