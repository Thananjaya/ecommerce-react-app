import React from "react";
import CollectionListing from "../collectionListing/collectionListing.component.jsx";
import "./shopCollection.styles.scss";

const ShopCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, index) => index <= 4)
        .map((item) => (
          <CollectionListing key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ShopCollection;
