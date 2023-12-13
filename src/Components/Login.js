import Nav from "./Nav";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const clickButtonSignIn = () => {
    setInvalidUser(false);
    if (userName.length > 0 && password.length > 0) {
      axios
        .post("https://deal-buddy-78e1f7201a81.herokuapp.com/api/login", {
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
            
        }).catch(err => {
          setInvalidUser(true);
        })
    }
  };

  const signIn = (e) => {
    setInvalidUser(false);
    if (e.key === "Enter") {
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
          }).catch( error => {
            setInvalidUser(true);
          })
      }
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
          onKeyDown={(e) => signIn(e)}
        ></input>
        <input
          type={"password"}
          placeholder="Password"
          className="form-name"
          onChange={handleChangePassword}
          required
          onKeyDown={(e) => signIn(e)}
        ></input>
        <button onClick={clickButtonSignIn} id="signIn">
          SIGN IN
        </button>
        {invalidUser === true ? <h1 className="invalid-user">Error: Invalid crendentials</h1>: <h1></h1> }
      </div>
    </div>
  );
};

export default Login;
