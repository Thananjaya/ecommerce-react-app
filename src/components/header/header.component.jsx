import React from "react";
import CartIcon from '../cartIcon/cartIcon.components';
import CartDropDown from '../cartDropdown/cartDropdown.components';
import { connect } from "react-redux";
import { auth } from "../../config/firebaseConfig";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({currentUser}, hidden= true) => {  
  return(
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => auth.signOut()}
            style={{ cursor: "pointer" }}
          >
            Sign Out
          </div>
        ) : (
          <Link to="/signIn" className="option">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      { hidden ? null : <CartDropDown /> }
    </div>
)};


export default Header;
