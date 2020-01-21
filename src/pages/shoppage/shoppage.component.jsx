import React, { Component } from "react";
import ShopData from "./shop.data.js";
import ShopCollection from "../../components/shopCollection/shopCollection.component.jsx";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: ShopData
    };
  }

  render() {
    const collections = this.state.shopData;
    return (
      <div className="shop-page">
        <h3>Collections</h3>
        {collections.map(({ id, ...shopData }) => {
          return <ShopCollection key={id} {...shopData} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
