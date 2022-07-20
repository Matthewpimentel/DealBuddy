import Nav from "./Nav";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const signIn = () => {
    if (userName.length > 0 && password.length > 0) {
      axios
        .post("https://dealbuddy-backend.herokuapp.com/api/login", {
          data: {
            username: userName,
            password: password,
          },
        })
        .then((response) => {
          if (response.data !== null) {
            let user = [];
            user.push(userName);
            user.push(password);
            localStorage.setItem("token", JSON.stringify(response.data));
            localStorage.setItem("userDetails", JSON.stringify(user));
            window.location.replace("/");
          }
        });
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
          type={"password"}
          placeholder="Password"
          className="form-name"
          onChange={handleChangePassword}
          required
        ></input>
        <button onClick={signIn}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Login;
