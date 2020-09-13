import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import UserInput from './Components/UserInput';
import SearchResults from "./SearchResults";

// grab the recipe id in the route path below. (the route parameter/params)

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} exact />
      <Route exact path="/SearchResults" render={props => <UserInput {...props}/>} />
    </Switch>
  </BrowserRouter>
);

export default Router;