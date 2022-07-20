import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";


const LoggedInNav = () => {

  const getUserDetails = () => {
    let user = JSON.parse(localStorage.getItem("userDetails"));
    let userName = user[0];
    return userName;
  };

  const searchBarChange = (e) => {
      if(e.key === "Enter"){
        console.log(e.currentTarget.value);
        window.location.replace(`/searchResults/${e.currentTarget.value}`);
      }
  };



  return (
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
    </div>
  );
};

export default LoggedInNav;
