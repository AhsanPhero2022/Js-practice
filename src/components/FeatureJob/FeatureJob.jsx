import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { addToDb } from "../../utils/fakeDB";

const FeatureJob = () => {
  const [feature, setFeature] = useState([]);
  const [showAll, setShowAll] = useState([false]);

  useEffect(() => {
    fetch("companyData.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  const handleAddToCart = (id) => {
    addToDb(id);
  };

  const handleForData = () => {
    setShowAll(!showAll);
  };
  const showButton = showAll ? feature : feature.slice(0, 4);

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
      <p className="text-center p-3 text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className=" grid grid-cols-1 lg:grid-cols-2 sm:mx-auto lg:mx-28 gap-4 ">
        {showButton.map((job) => (
          <Cart key={job.id} handleAddToCart={handleAddToCart} job={job} />
        ))}
      </div>
      <div className="my-8 text-center">
        <button onClick={() => handleForData()} className="btn btn-success ">
          Show All
        </button>
      </div>
    </div>
  );
};

export default FeatureJob;
