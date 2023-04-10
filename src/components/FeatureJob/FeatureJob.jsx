import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import { addToDb, getStoredCart } from "../../utils/fakeDB";
import JobDetails from "../JobDetails/JobDetails";

const FeatureJob = () => {
  const [feature, setFeature] = useState([]);

  useEffect(() => {
    fetch("companyData.json")
      .then((res) => res.json())
      .then((data) => setFeature(data));
  }, []);

  const handleAddToCart = (id) => {
    addToDb(id);
  };

  const storedCart = getStoredCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = feature.find((data) => data.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
      <p className="text-center p-3 text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className=" grid lg:grid-cols-2 mx-32">
        {feature.map((job) => (
          <Cart
            key={job.id}
            savedCart={savedCart}
            handleAddToCart={handleAddToCart}
            job={job}
          />
        ))}
      </div>
      {savedCart.map((details) => (
        <JobDetails key={details.id} details={details} />
      ))}
    </div>
  );
};

export default FeatureJob;
