import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import UserInput from './components/UserInput';
// import './css/customStyles.css'
import './App.css';
import Home from './components/Home';
import Search from './components/Search';
import SearchResults from './components/SearchResults';
// import SelectedItem from './components/SelectedItem';

class App extends Component {
  render() {
    return (
      <main className="container">
        <Route path="/search" component={Search} />
        <Route path="/searchresults" component={SearchResults} />
        {/* <Route path="/selecteditem" component={SelectedItem} /> */}
        <Route path="/" component={Home} />
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

