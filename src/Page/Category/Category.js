/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";
import CateygoryCard from "../../components/CategoryCard/CateygoryCard";

const Category = () => {
  const catItems = useLoaderData();
  return (
    <div className="container">
      <h2 className="text-center mt-5">
        {catItems.length} Items are Available
      </h2>
      <div className="row g-4 mt-5">
        {catItems.map((item) => {
          return <CateygoryCard key={item._id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Category;
