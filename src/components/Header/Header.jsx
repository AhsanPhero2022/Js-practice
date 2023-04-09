import React from "react";
import hardy from "../../assets/images/P3OLGJ.png";

const Header = () => {
  return (
    <div className="bg-cyan-50 ">
      <div className="grid lg:grid-cols-2 lg:mx-32  items-center gap-20 px-3">
        <div className="">
          <h1 className="text-4xl font-bold">
            One Step Closer To Your
            <span className="text-green-300 ">Dream Job</span>
          </h1>
          <p className="text-gray-500 py-5">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-info">Get Started</button>
        </div>
        <div>
          <img src={hardy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
