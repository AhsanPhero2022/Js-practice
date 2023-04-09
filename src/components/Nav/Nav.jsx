import React from "react";

const Nav = () => {
  return (
    <div>
      <div className=" mx-auto my-6  w-4/5 navbar bg-base-100">
        <div className="navbar-start">
          <h3 className="font-bold text-2xl text-green-300	">
            Programmer Job Details
          </h3>
        </div>
        <div className="navbar-center">
          <div className="grid lg:grid-cols-4 gap-12">
            <a className=" normal-case  ">Home</a>
            <a className="text-cyan-500 underline normal-case">Statistics</a>
            <a className="-case  ">Applied Jobs</a>
            <a className="-case ">Blog</a>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-info ">
            <div>
              <h3>Start Applying</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
