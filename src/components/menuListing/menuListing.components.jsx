import React, { Component } from "react";
import MenuItem from "../menuItem/menuItem.components.jsx";
import "./menuListing.styles.scss";

class MenuListing extends Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className="menu-listing">
        {this.state.sections.map(({ id, ...sectonProps }) => {
          return <MenuItem key={id} {...sectonProps} />;
        })}
      </div>
    );
  }
}

export default MenuListing;
