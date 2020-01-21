import React from "react";
import CollectionListing from "../collectionListing/collectionListing.component.jsx";
import "./shopCollection.styles.scss";

const ShopCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, index) => index <= 4)
        .map(({ id, ...itemData }) => (
          <CollectionListing key={id} {...itemData} />
        ))}
    </div>
  </div>
);

export default ShopCollection;
