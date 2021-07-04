import React from "react";
import CustomButton from "../customButton/customButton.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartAction";
import "./collectionListing.styles.scss";

const CollectionListing = ({ item, addItem }) => {
  const { name, price, imageUrl} = item;
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
      <CustomButton onClick={() => addItem(item)} inverted>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDisptachToProps = (dispatch) => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDisptachToProps)(CollectionListing);
