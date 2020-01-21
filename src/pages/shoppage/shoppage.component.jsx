import React, { Component } from "react";
import ShopData from "./shop.data.js";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: ShopData
    };
  }

  render() {
    return <div>hi there this is shop page</div>;
  }
}

export default ShopPage;
