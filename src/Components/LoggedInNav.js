import { Link } from "react-router-dom";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "./Hamburger";

const LoggedInNav = () => {
  const [show, setShow] = useState(false);

  const getUserDetails = () => {
    let user = JSON.parse(localStorage.getItem("userDetails"));
    let userName = user[0];
    return userName;
  };

  const searchBarChange = (e) => {
    if (e.key === "Enter") {
      window.location = `/searchResults/${e.currentTarget.value}`;
    }
  };

  const showHamburger = () => {
    setShow(true);

    if (show === true) {
      setShow(false);
    }
  };

  return (
    <div id="hamburger-menu">
      {show && <Hamburger id="hamburger-background" />}
      <div className="nav">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1>DealBuddy</h1>
        </Link>
        <div className="web-links">
          <Link to={"/games"}>Top Game Deals</Link>
          <Link to={"/bundles"}>Bundles</Link>
        </div>
        <div className="sign-links logged-in">
          <input
            type="search"
            placeholder="Search"
            onKeyDown={(e) => searchBarChange(e)}
          ></input>

          <Link to={"/profile"}>
            <CgProfile size={40} />
          </Link>
        </div>
        <div className="mobile-hamburger">
        <GiHamburgerMenu size={20} onClick={showHamburger} />
      </div>
      </div>
    </div>
  );
};

export default LoggedInNav;
