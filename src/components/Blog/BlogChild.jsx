import React from "react";

const BlogChild = ({ singleQuestion }) => {
  const { name, description, picture } = singleQuestion;
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 sm:mx-auto  gap-4 mx-auto bg-green-100 m-8 card w-2/3 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-80" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogChild;
