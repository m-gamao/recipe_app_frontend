// App.js is responsible for corralling all of the components in one place,
  // to deliver to the index.js file. App.js is the middleman between child components 
  // rendering to index.js.
// import UserInput from './components/UserInput';
// import './css/customStyles.css'
// import SelectedItem from './components/SelectedItem';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import SearchResults from './components/ShowResults';


class App extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
            <Route path="/search" component={Search} />
            <Route path="/search_results" component={SearchResults} />
            {/* <Route path="/selecteditem" component={SelectedItem} /> */}
            <Route path="/" component={Home} />
        </Switch>
      </main>
    )
  }
}

export default App;
    




// function App() {
//   return (
//     <Switch>
//       <Home />
//       <Route exact path="/Search" render={props => <Search {...props}/>} />
//       <Search />
//     </Switch>
//   );
// };

