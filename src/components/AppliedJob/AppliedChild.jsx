import React from "react";
import { Link } from "react-router-dom";
import local from "../../assets/icons/Location Icon.png";
import sali from "../../assets/icons/salary.png";

const AppliedChild = ({ data }) => {
  const { picture, title, name, location, salary, category, category1 } = data;

  return (
    <div>
      <div>
        <div className="flex items-center gap-3 h-44 lg:mx-32 rounded p-2 bg-green-100 my-8">
          <div>
            <img className="h-40 w-44 rounded" src={picture} alt="" />
          </div>
          <div className="grow ">
            <p className="font-semibold">{title}</p>
            <h2 className="">{name}</h2>

            <button className="m-2 btn btn-success btn-outline">
              {category}
            </button>
            <button className="btn btn-success btn-outline">{category1}</button>
            <p className="flex">
              <img src={local} alt="" />
              {location}
              <span className="flex">
                <img src={sali} alt="" />
                {salary}
              </span>
            </p>
          </div>
          <div>
            <Link to="/JobDetails">
              <button className="btn btn-success">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedChild;
