import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const DashboradLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="rounded mt-3 shadow-lg p-4">
              <h3>Dashboard</h3>
              <hr />
              <div className="card p-3 mt-3">Home</div>
              <div className="card p-3 mt-3">Home</div>
              <div className="card p-3 mt-3">Home</div>
              <div className="card p-3 mt-3">Home</div>
            </div>
          </div>
          <div className="col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboradLayout;
