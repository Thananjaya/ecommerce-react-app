import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import Signing from "./pages/signing/signing.component.jsx";
import HomePage from "./pages/homepage/homepage.components.jsx";
import ShopPage from "./pages/shoppage/shoppage.component.jsx";
import "./app.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route component={Signing} path="/signin" />
        <Route component={ShopPage} path="/shop" />
      </Switch>
    </div>
  );
}
export default App;
