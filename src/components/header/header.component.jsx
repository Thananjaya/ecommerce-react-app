import React from "react";
import CartIcon from '../cartIcon/cartIcon.components';
import CartDropDown from '../cartDropdown/cartDropdown.components';
import { connect } from "react-redux";
import { auth } from "../../config/firebaseConfig";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";

const Header = ({currentUser, hidden}) => {  
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
      {hidden ? null : <CartDropDown />}
    </div>
)};

// it is used to provide the store data to your component
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

// connect is the higher order component which 
// is used for 
// connecting component to redux store
export default connect(mapStateToProps)(Header);
