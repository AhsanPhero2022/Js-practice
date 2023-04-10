import React from "react";

const Cart = ({ job }) => {
  const { picture, category, category1, location, title, salary, name } = job;
  return (
    <div className="">
      <div className="m-5 card w-96 bg-base-100 shadow-xl">
        <figure className="w-32  bg-green-200">
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{name}</p>
          <div className="card-actions justify-st">
            <button className="btn btn-outline btn-success">{category}</button>
            <button className="btn btn-outline btn-success">{category1}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
