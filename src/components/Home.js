import React from "react";
import Utils from "./Utils";
import MainTable from "./MainTable";
import Date from "./Date";

const Home = () => {
  return (
    <div className="container">
      <Date />
      <Utils />
      <MainTable />
    </div>
  );
};

export default Home;
