import React from "react";
// Import Components
import Sidebar from "../components/Sidebar";
import Main from "./Main";

const Home = () => {
  return (
    <div className="container-fluid p-0 d-flex">
      <Sidebar />
      <div id="Main" className="main">
        <Main />
      </div>
    </div>
  );
};

export default Home;
