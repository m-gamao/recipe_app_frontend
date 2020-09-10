import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Recipes from "./Recipe";

// grab the recipe id in the route path below. (the route parameter/params)

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipes/:id" component={Recipes} />
    </Switch>
  </BrowserRouter>
);

export default Router;