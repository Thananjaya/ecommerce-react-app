import React from "react";
import CustomButton from "../customButton/customButton.component";

import "./collectionListing.styles.scss";

const CollectionListing = ({ imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div
        className="collection-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted>Add to Cart</CustomButton>
    </div>
  );
};

export default CollectionListing;
