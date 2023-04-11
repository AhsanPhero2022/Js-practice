import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredCart } from "../../utils/fakeDB";
import AppliedChild from "./AppliedChild";

const AppliedJob = () => {
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
      {savedCart.map((data) => (
        <AppliedChild key={data.id} data={data} />
      ))}
    </div>
  );
};

export default AppliedJob;
