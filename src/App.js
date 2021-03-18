// App.js is responsible for corralling all of the components in one place,
// to deliver to the index.js file. App.js is the middleman between child components
// rendering to index.js.

import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import FavoritesContainer from "./Pages/Favorites/containers/FavoritesContainer";
import SearchContainer from "./Pages/SearchDisplay/containers/SearchContainer";
import { getFavoriteRecipes } from "./Store/middleware/favoritesAsync";

class App extends Component {
  componentDidMount() {
    this.props.getFavoriteRecipes();
  }

  render() {
    return (
      <main className="container">
        <Switch>
          <Route exact path="/favorites" component={FavoritesContainer} />
          <Route exact path="/search" component={SearchContainer} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default connect(null, { getFavoriteRecipes })(App);

// function App() {
//   return (
//     <Switch>
//       <Home />
//       <Route exact path="/Search" render={props => <Search {...props}/>} />
//       <Search />
//     </Switch>
//   );
// };
