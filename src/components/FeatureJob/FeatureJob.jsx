import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const FeatureJob = () => {
  const [feature, setFeature] = useState();

  useEffect(() => {
    fetch("companyData.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
      <p className="text-center p-3 text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      {feature.map((job) => (
        <Cart key={job.id} job={job} />
      ))}
    </div>
  );
};

export default FeatureJob;
