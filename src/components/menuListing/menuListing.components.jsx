import React from "react";
import {connect} from "react-redux";
import MenuItem from "../menuItem/menuItem.components.jsx";

import "./menuListing.styles.scss";

const MenuListing = ({sections}) => (
  <div className="menu-listing">
    {sections.map(({ id, ...sectionProps }) => {
      return <MenuItem key={id} {...sectionProps} />;
    })}
  </div>
);

const mapStateToProps = state => ({
  sections: state.directory.sections
});

export default connect(mapStateToProps)(MenuListing);
