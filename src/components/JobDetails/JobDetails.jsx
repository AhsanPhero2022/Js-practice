import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utils/fakeDB";
import DetailsChile from "../DetailsChild/DetailsChile";

const JobDetails = () => {
  const feature = useLoaderData();

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
      <h1 className="text-3xl font-semibold text-center">Job Details</h1>
      {savedCart.map((data) => (
        <DetailsChile key={data.id} data={data} />
      ))}
    </div>
  );
};

export default JobDetails;
