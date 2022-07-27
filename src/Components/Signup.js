import axios from "axios";
import { useState } from "react";
import Nav from "./Nav";
const Signup = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [emailOrUser, setEmailOrUser] = useState(true);
  const [checkEmailFormat, setCheckEmailFormat] = useState(true);

  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const sendData = (e) => {
    setPasswordMatch(true);
    setEmailOrUser(true);
    setCheckEmailFormat(validateEmail(email));
    if (e.key === "Enter") {
      if (
        userName.length > 5 &&
        (password.length > 5) & (password === confirmPassword) &&
        email.length > 5 && checkEmailFormat === true
      ) {
        axios
          .post("https://dealbuddy-backend.herokuapp.com/api/createUser", {
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
          .catch((err) => setEmailOrUser(false));
      } else if (password !== confirmPassword) {
        setPasswordMatch(false);
      }
    }
  };

  const clickSignUp = () => {
    setPasswordMatch(true);
    setEmailOrUser(true);
    setCheckEmailFormat(validateEmail(email));
    if (
      userName.length > 5 &&
      (password.length > 5) & (password === confirmPassword) &&
      email.length > 5 && checkEmailFormat === true
    ) {
      axios
        .post("https://dealbuddy-backend.herokuapp.com/api/createUser", {
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
        .catch((err) => setEmailOrUser(false));
    } else if (password !== confirmPassword) {
      setPasswordMatch(false);
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
          onKeyDown={(e) => sendData(e)}
        ></input>
        <input
          type={"text"}
          placeholder="Email"
          className="form-name"
          onChange={handleChangeEmail}
          required
          onKeyDown={(e) => sendData(e)}
        ></input>
        <input
          type={"password"}
          placeholder="Password"
          className="form-name"
          onChange={handleChangePassword}
          required
          onKeyDown={(e) => sendData(e)}
        ></input>
        <input
          type={"password"}
          placeholder="Confirm Password"
          className="form-name"
          onChange={handleConfirmPassword}
          required
          onKeyDown={(e) => sendData(e)}
        ></input>
        <button onClick={clickSignUp}>SIGN UP</button>
        <div className="invalid-signup">
          {passwordMatch === false ? (
            <h1>Password's do not match</h1>
          ) : (
            <h1></h1>
          )}
          {emailOrUser === false ? (
            <h1>Username or Email already exists</h1>
          ) : (
            <h1></h1>
          )}{checkEmailFormat === false ? <h1>Invalid email</h1> : <h1></h1>}
        </div>
      </div>
    </div>
  );
};

export default Signup;
