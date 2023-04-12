import React from "react";
import { Link } from "react-router-dom";
import phon from "../../assets/icons/phone.png";
import location from "../../assets/icons/Location Icon.png";
import salari from "../../assets/icons/salary.png";
import emaill from "../../assets/icons/email.png";
import job from "../../assets/icons/job.png";

const DetailsChile = ({ data }) => {
  const {
    description,
    responsiblity,
    experience,
    education,
    job_title,
    phone,
    email,
    address,
    salary,
  } = data;
  return (
    <div>
      <div className="grid lg:grid-cols-2 lg:mx-32 gap-4 mt-16 mb-16">
        <div>
          <p>
            <span className="text-2xl font-semibold">Job Description: </span>
            {description}
          </p>
          <p>
            <span className="text-2xl font-semibold">Job Responsibility: </span>
            {responsiblity}
          </p>
          <p>
            <span className=" font-semibold">Educational Requirements: </span>
            {education}
          </p>
          <p>
            <span className=" font-semibold">Experiences: </span>
            {experience}
          </p>
        </div>
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body bg-purple-100 rounded-lg mb-2">
              <h2 className="card-title">Job Details</h2>
              <p className="flex">
                <img src={salari} alt="" />
                {salary}
              </p>
              <p className="flex">
                <img src={job} alt="" />
                {job_title}
              </p>
              <h2 className="text-2xl font-bold line-h-1">
                Contact Information
              </h2>
              <p className="flex">
                <img src={phon} alt="" />
                {phone}
              </p>
              <p className="flex">
                <img src={emaill} alt="" />
                {email}
              </p>
              <p className="flex">
                <img src={location} alt="" />
                {address}
              </p>
              <div className="card-actions justify-end"></div>
            </div>
            <Link>
              <button
                onClick={() => alert("Apply successful")}
                className=" btn btn-success w-full hover:bg-purple-300"
              >
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsChile;
