import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Bundles from "./Components/Bundles";
import Games from "./Components/Games";
import SearchPage from "./Components/SearchPage";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/bundles" element={<Bundles/>}/>
      <Route path="/games" element={<Games/>}/>
      <Route path="/searchResults/:name" element={<SearchPage/>}/>
    </Routes>
  </BrowserRouter>
);


