import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Post from "./Components/Post/Post";
import Icon from "./Components/Icon/Icon";
import Profile from "./Components/Profile/Profile";
import data from './data.json';
import "./App.css";
function App() {

  return (
    <>
      <div className="container">
        <NavBar />
        <Profile />
        <Icon />
        <div className="total_count">134 Posts </div>
        <Post data={data}  />
      </div>
    </>
  );
}

export default App;
