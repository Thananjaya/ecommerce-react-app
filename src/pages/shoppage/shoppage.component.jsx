import React from "react";
import Category from "../../pages/category/category.component";
import {Route} from "react-router-dom";
import CollectionOverview from "../../components/collectionOverview/collectionOverview.component.jsx";

const ShopPage = ({match}) => (  
  <div className="shop-page">
    <h1>Collections</h1>
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:categoryID`} component={Category} />
  </div>
);

export default ShopPage;
