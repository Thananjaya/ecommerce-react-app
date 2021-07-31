import React, { Component } from "react";
import { connect } from "react-redux";
import ShopCollection from "../../components/shopCollection/shopCollection.component.jsx";


const ShopPage = ({shopData}) => (  
  <div className="shop-page">
    <h1>Collections</h1>
    {shopData.map(({ id, ...shopData }) => {
      return <ShopCollection key={id} {...shopData} />;
    })}
  </div>
);

const mapStateToProps = (state) => ({
  shopData: state.shop.collections
})

export default connect(mapStateToProps)(ShopPage);
