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
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: 'hats'
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: 'hats'
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: 'hats'
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: 'hats'
        }
      ]
    };
  }

  render() {
    return (
      <div className="menu-listing">
        {this.state.sections.map(({ id, ...sectionProps }) => {
          return <MenuItem key={id} {...sectionProps} />;
        })}
      </div>
    );
  }
}

export default MenuListing;
