const hamburger = () => {
  return (
    <div className="hamburger-menu" id="hamburger">
      <a href="/games"><h1>Top Game Deals</h1></a>
      <a href="/bundles"><h1>Bundle List</h1></a>
      {localStorage.getItem("token") === null && <h1><a href="/signin">Sign in</a></h1>}
      {localStorage.getItem("token") === null && <h1><a href="/signup">Sign up</a></h1>}
      {localStorage.getItem("token") !== null && <h1><a href="/profile">Profile</a></h1>}
    </div>
  );
};

export default hamburger;