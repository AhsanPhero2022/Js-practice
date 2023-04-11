import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="">
      <div className="mx-auto my-6  w-4/5 navbar bg-base-100">
        <div className="navbar-start">
          <h3 className="font-bold text-2xl text-green-300	">
            Programmer Job Details
          </h3>
        </div>
        <div className="navbar-center">
          <div className="grid lg:grid-cols-4 gap-12">
            <Link to="/" className=" normal-case  ">
              Home
            </Link>
            <Link
              to="/Statistic"
              className="text-cyan-500 underline normal-case"
            >
              Statistics
            </Link>
            <Link to="/appliedJob" className="-case  ">
              Applied Jobs
            </Link>
            <Link to="/Blog">Blog</Link>
          </div>
        </div>
        <div className="navbar-end">
          <Link to="/JobDetails">
            <button className="btn btn-info ">
              <div>
                <h3>Start Applying</h3>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
