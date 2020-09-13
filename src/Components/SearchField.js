import React from 'react';

function SearchField() {

  function showForm() {
  
    return (
      <button onClick={sayHello}>
        
      </button>
    );
}

export default App;



const SearchField = (props) => {
  return (
    <div className="SearchField">
           <div> 
               <form id= "Keyword-search">

                   <label>Enter Recipe Keyword: </label>
                   <input type="text"> </input>

                   <button>Search</button>
              </form>
          </div>
    </div>
  )


const showForm = () => {
    this.setState({
        showForm: !this.state.showForm
    })
}
}

export default SearchField;









// class SearchField extends Component{

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

// export default SearchField;