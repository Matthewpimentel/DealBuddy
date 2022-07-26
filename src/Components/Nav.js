import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Hamburger from "./Hamburger";
const Nav = () => {
  const [show, setShow] = useState(false);

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
        <div className="sign-links">
          <Link to={"/signin"} style={{ textDecoration: "none" }}>
            <a>Sign In</a>
          </Link>
          <Link to={"/signup"}>
            <button>Sign Up</button>
          </Link>
          <input
            type="text"
            placeholder="Search"
            onKeyDown={(e) => searchBarChange(e)}
          ></input>
        </div>
        <div className="mobile-hamburger">
          <GiHamburgerMenu size={20} onClick={showHamburger} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
