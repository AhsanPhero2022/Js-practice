import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart, removeFromDb } from "../../utils/fakeDB";
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

  const handleRemoveCart = (id) => {
    console.log(id);
    removeFromDb(id);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Job Details</h1>
      {savedCart.map((data) => (
        <DetailsChile
          handleRemoveCart={handleRemoveCart}
          key={data.id}
          data={data}
        />
      ))}
    </div>
  );
};

export default JobDetails;
