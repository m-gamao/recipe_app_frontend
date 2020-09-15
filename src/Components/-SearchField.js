import React, { Component } from "react";

class Search extends Component {
  state = {
    searchValue: '',
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
    };

  handleSearch = () => {
    }

    render() {
      return (
      <div className="Search">
      <div> 
          <form id= "Keyword-search">

              <label>Enter Recipe Keyword: </label>
              <input
                name="text"
                type="text"
                placeholder="Search"
                onChange={event => this.handleOnChange(event)}
                value={this.state.searchValue}/>

              <button onClick={this.handleSearch}>Search</button>

              {this.state.meals ? (
                  <div>
                  {this.state.meals.map((meal, index) => (
                  <div key={index}>
                  <h1>{meal.strMeal}</h1>
                  <img src={meal.strMealThumb} alt="meal-thumbnail" />
                  </div>
                  ))}
                  </div>
                  ) : (
                  <p>Try searching for a meal</p>
                  )}
         </form>
     </div>
</div>
)
}
}

export default Search;

// and you could probably condense the search field component to make it like the home 
// component, a single const and a single return and then export at the bottom








// class Search extends Component{

//     constructor(props){
//         (props);

//         // Here we initialize our components state
//         this.state = {
//             showForm: false
//         };

//         this.onClick = this.onClick.bind(this);
//     }

//     onClick () {
//         // On click we change our state – this will trigger our `render` method
//         this.setState({ showForm: true });
//     }

//     renderForm () {
//        return (

//        );
//     }

// }

// export default Search;