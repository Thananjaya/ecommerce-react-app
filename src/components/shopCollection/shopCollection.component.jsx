import React from "react";

const ShopCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1>{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((items, index) => index <= 4)
        .map(data => (
          <div key={data.id} className="something">
            {data.name}
          </div>
        ))}
    </div>
  </div>
);

export default ShopCollection;
