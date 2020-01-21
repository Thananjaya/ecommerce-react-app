import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.components.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";

function App() {
  return (
    <Switch>
      <Route exact component={HomePage} path="/" />
      <Route component={ShopPage} path="/shop" />
    </Switch>
  );
}
export default App;
