import React from "react";
import { useLoaderData } from "react-router-dom";
import BlogChild from "./BlogChild";

const Blog = () => {
  const question = useLoaderData();

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center m-12 text-green-400">
        Question Answer is here!
      </h2>
      {question.map((singleQuestion) => (
        <BlogChild key={singleQuestion.id} singleQuestion={singleQuestion} />
      ))}
    </div>
  );
};

export default Blog;
