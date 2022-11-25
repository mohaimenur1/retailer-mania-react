/** @format */

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../../components/BookingModal/BookingModal";
import CateygoryCard from "../../components/CategoryCard/CateygoryCard";

const Category = () => {
  const [product, setProduct] = useState(null);
  const catItems = useLoaderData();
  return (
    <div className="container">
      <h2 className="text-center mt-5">
        {catItems.length} Items are Available
      </h2>
      <div className="row g-4 mt-5">
        {catItems.map((item) => {
          return (
            <CateygoryCard key={item._id} item={item} setProduct={setProduct} />
          );
        })}
      </div>
      {product && <BookingModal product={product} />}
    </div>
  );
};

export default Category;
