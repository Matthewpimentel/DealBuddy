import axios from "axios";
import { useState } from "react";
import Nav from "./Nav";
const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const sendData = (e) => {
    e.preventDefault();
    if (userName.length > 0 && password.length > 0) {
      axios
        .post("http://localhost:5000/api/createUser", {
          data: {
            username: userName,
            email: email,
            password: password,
          },
        })
        .then((response) => {
          console.log(response);
          let userDetails = [];
          userDetails.push(userName);
          userDetails.push(email);
          if (
            localStorage.getItem("token") === null &&
            localStorage.getItem("userDetails") === null
          ) {
            localStorage.setItem("token", JSON.stringify(response.data));
            localStorage.setItem("userDetails", JSON.stringify(userDetails));
            window.location.replace("/");
          }
        })
        .catch((err) => console.log(err.response.status));
    }
  };

  return (
    <div>
      <Nav />
      <div className="signup-form">
        <input
          type={"text"}
          placeholder="Username"
          className="form-name"
          onChange={handleChangeUsername}
          required
        ></input>
        <input
          type={"text"}
          placeholder="Email"
          className="form-name"
          onChange={handleChangeEmail}
          required
        ></input>
        <input
          type={"password"}
          placeholder="Password"
          className="form-name"
          onChange={handleChangePassword}
          required
        ></input>
        <input
          type={"password"}
          placeholder="Confirm Password"
          className="form-name"
          rquired
        ></input>
        <button onClick={sendData}>SIGN UP</button>
      </div>
    </div>
  );
};

export default Signup;
