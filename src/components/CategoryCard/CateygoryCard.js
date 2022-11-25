import React from "react";
import "./CategoryCard.css";

const CateygoryCard = ({ item }) => {
  return (
    <div className="col-lg-4">
      <div className="card h-100 shadow-lg">
        <div className="p-2">
          <img src={item.img} className="img-fluid w-100" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.location}</p>
          <span>Resale Price: {item.resaleprice}</span>
          <span>Original Price: {item.originalprice}</span>
          <span>Use Year: {item.useyear}</span>
          <span>Seller Name: {item.sellername}</span>
          <div className="card-btn">
            <a className="btn btn-primary w-100 rounded-pill">Book now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CateygoryCard;
