import { Link } from "react-router-dom";

const Nav = () => {
  const searchBarChange = (e) => {
    if(e.key === "Enter"){
      console.log(e.currentTarget.value);
      window.location.replace(`/searchResults/${e.currentTarget.value}`);
    }
};
  return (
    <div className="nav">
      <Link to={"/"} style={{ textDecoration: 'none'}}><h1>DealBuddy</h1></Link>
      <div className="web-links">
        <Link to={"/games"}>Top Game Deals</Link>
        <Link to={"/bundles"}>Bundles</Link>
      </div>
      <div className="sign-links">
        <Link to={"/signin"} style={{ textDecoration: 'none'}}><a>Sign In</a></Link>
        <Link to={"/signup"}><button>Sign Up</button></Link>
        <input type="text" placeholder="Search" onKeyDown={(e) => searchBarChange(e)}></input>
      </div>
    </div>
  );
}

export default Nav;
