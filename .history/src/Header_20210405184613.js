import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://rogerpacker.com/wp-content/uploads/2014/06/Amazon-logo.png"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Retu</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
