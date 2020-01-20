import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components.jsx";

const ShopDetails = props => {
  return <h1>{`SHOP DETAILS PAGE:${props.match.params.id}`}</h1>;
};

const App = () => (
  <Switch>
    <Route exact component={HomePage} path="/" />
    <Route component={ShopDetails} path="/hats/:id" />
  </Switch>
);
export default App;
