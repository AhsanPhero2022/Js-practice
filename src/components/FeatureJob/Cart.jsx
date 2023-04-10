import React from "react";

const Cart = ({ job }) => {
  const { picture, category, category1, location, title, salary, name } = job;
  return (
    <div>
      <div className=" mx-5 my-12   card w-auto h-96 bg-base-100 shadow-xl">
        <figure className="w-32 p-5">
          <img className="rounded" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{name}</p>
          <div className="card-actions justify-st mt-2">
            <button className="btn btn-outline btn-success">{category}</button>
            <button className="btn btn-outline btn-success">{category1}</button>
          </div>
        </div>
        <div className="flex gap-3 ml-8 mb-3">
          <div>
            <p>{location}</p>
          </div>
          <div>
            <p>{salary}</p>
          </div>
        </div>
        <button className="btn w-32 m-4 ml-8 btn-success">View Details</button>
      </div>
    </div>
  );
};

export default Cart;
