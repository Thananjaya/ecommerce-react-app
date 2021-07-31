import React from "react";
import { connect } from "react-redux";
import ShopCollection from "../shopCollection/shopCollection.component";
import "./collectionOverview.styles.scss";

const CollectionOverview = ({collections}) => (
	<div className="collections-overview">
		{collections.map(({ id, ...shopData }) => {
      return <ShopCollection key={id} {...shopData} />;
    })}
	</div>
)

const mapStateToProps = (state) => ({
  collections: state.shop.collections
})

export default connect(mapStateToProps)(CollectionOverview);