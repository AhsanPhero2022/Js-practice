import React from "react";
import firstIcon from "../../assets/icons/accounts.png";
import second from "../../assets/icons/business.png";
import third from "../../assets/icons/social.png";
import fourth from "../../assets/icons/chip.png";

const JobCategory = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center font-bold text-3xl p-5">Job Category List</h2>
      <p className="text-gray-500 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid lg:grid-cols-4 mx-32 my-12 gap-4 ">
        <div className=" border p-6 rounded-lg bg-cyan-50">
          <img src={firstIcon} alt="" />
          <h2 className="font-medium ">Account & Finance</h2>
          <p>
            <small>300 Jobs Available</small>
          </p>
        </div>
        <div className=" border p-6 rounded-lg bg-cyan-50">
          <img src={second} alt="" />
          <h2 className="font-medium ">Creative Design</h2>
          <p>
            <small>100+ Jobs Available</small>
          </p>
        </div>
        <div className=" border p-6 rounded-lg bg-cyan-50">
          <img src={third} alt="" />
          <h2 className="font-medium ">Marketing & Sales</h2>
          <p>
            <small>150 Jobs Available</small>
          </p>
        </div>
        <div className=" border p-6 rounded-lg bg-cyan-50">
          <img src={fourth} alt="" />
          <h2 className=" font-medium ">Engineering Job</h2>
          <p>
            <small>Engineering Job</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
