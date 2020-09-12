import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Form from './Components/Form';
import Recipes from "./Recipe";

// grab the recipe id in the route path below. (the route parameter/params)

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} exact />
      <Route exact path="/recipes" render={props => <Form {...props}/>} />
    </Switch>
  </BrowserRouter>
);

export default Router;