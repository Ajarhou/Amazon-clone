import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import search from "../Icones/searchIcon.png";
import basket from "../Icones/shopping-cart.png";
import "./Header.css";
import { useAuth } from "../context/GlobalState";
import { auth } from "../firebase";

const Header = () => {
  const { user } = useAuth();
  const handleAuthentification = () => {
    auth.signOut();
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo-image" />
      </Link>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <img className="header-searchIcon" src={search} alt="search-image" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div className="header-option" onClick={handleAuthentification}>
            <div className="header-optionLineOne">
              hello {user ? user.email : "guest"}
            </div>
            <div className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& Orders </div>
          </div>
        </Link>

        <div className="header-option">
          <div className="header-optionLineOne">Your</div>
          <div className="header-optionLineTwo">Prime </div>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <img src={basket} alt="" />
            <span className="header-optionLineTwo header-basketCount">5</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
