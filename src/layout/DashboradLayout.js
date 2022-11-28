/** @format */

import React, { useContext } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import "./DashboardLayout.css";
import useAdmin from "../hooks/useAdmin";

import { AuthContext } from "../context/UserContext";
import useSeller from "../hooks/useSeller";
import Footer from "../components/Footer/Footer";

const DashboradLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="rounded mt-3 shadow-lg p-4">
              <h3>Dashboard</h3>
              <hr />
              <Link to="/" className="card p-3 mt-3 underline-none">
                Home
              </Link>
              {isAdmin && (
                <>
                  <Link
                    to="/dashboard/allusers"
                    className="card p-3 mt-3 underline-none"
                  >
                    All Users
                  </Link>
                </>
              )}
              <div>
                {isSeller && (
                  <>
                    <Link
                      to="/dashboard/addseller"
                      className="card p-3 mt-3 underline-none"
                    >
                      Add Products
                    </Link>
                    <Link
                      to="/dashboard/managerseller"
                      className="card p-3 mt-3 underline-none"
                    >
                      My Products
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboradLayout;
