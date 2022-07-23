import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Nav = () => {
  const navigate = useNavigate();

  const searchBarChange = (e) => {
    if (e.key === "Enter") {
      navigate(`/searchResults/${e.currentTarget.value}`);
    }
  };

  const showHamburger = () => {

  };
  return (
    <div id="hamburger-menu">
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
