/** @format */

import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const AddSeller = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  const imageHotKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const { data: categoryItems, isLoading } = useQuery({
    queryKey: ["add"],
    queryFn: async () => {
      const res = await fetch(`https://y-tau-blond.vercel.app/categoryadd`);
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    console.log(data);
    const img = data.img[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHotKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        // console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);
          const seller = {
            title: data.name,
            email: data.email,
            price: data.price,
            categoryid: data.add,
            img: imgData.data.url,
            location: data.location,
            productcondition: data.condtion,
            mobilenumber: data.phone,
            description: data.descriptioin,
            purchaseyear: data.pyear,
          };
          //save seller info to the database
          fetch("https://y-tau-blond.vercel.app/category", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(seller),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managerseller");
            });
        }
      });
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div
          className="spinner-grow text-danger"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-2">
      <h2>Add Product</h2>
      <div className="container card p-5 mt-5">
        <h2 className="text-center display-5 fw-semibold">Add Product</h2>
        <form onSubmit={handleSubmit(handleAddDoctor)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Product Title
            </label>
            <input
              {...register("name", { required: "please provide name" })}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {errors.name && (
              <p className="text-danger" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              {...register("email", {
                required: "Plase Provide Email Address.",
              })}
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
            {errors.email && (
              <p className="text-danger" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>

          {/* condtion type */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Product condition
            </label>
            <select
              {...register("condtion")}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Select Condition</option>

              <option value="Excelent">Excelent</option>
              <option value="Good">Good</option>
              <option value="fair">Fair</option>
              {/* {categoryItems.map((category) => (
                <option key={category._id} value={category.title}>
                  {category.title}
                </option>
              ))} */}
            </select>
          </div>

          {/* location */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Location
            </label>
            <input
              {...register("location", {
                required: "Plase Provide Location.",
              })}
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
            {errors.location && (
              <p className="text-danger" role="alert">
                {errors.location.message}
              </p>
            )}
          </div>
          {/* price */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Price
            </label>
            <input
              {...register("price", {
                required: "Plase Provide price.",
              })}
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
            {errors.price && (
              <p className="text-danger" role="alert">
                {errors.price.message}
              </p>
            )}
          </div>
          {/* mobile number */}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Mobile Number
            </label>
            <input
              {...register("phone", {
                required: "Plase Provide price.",
              })}
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
            {errors.phone && (
              <p className="text-danger" role="alert">
                {errors.phone.message}
              </p>
            )}
          </div>
          {/* product category */}
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Product Category
            </label>
            <select
              {...register("add")}
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Select Category</option>

              <option value="637f4e804600a435c16aabfe">Dell</option>
              <option value="637f4e804600a435c16aabff">Hp</option>
              <option value="637f4e804600a435c16aac00">Lenovo</option>
              {/* {categoryItems.map((category) => (
                <option key={category._id} value={category.title}>
                  {category.title}
                </option>
              ))} */}
            </select>
          </div>
          {/* Year of purchase*/}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Purchase Year
            </label>
            <input
              {...register("pyear", {
                required: "Plase Provide pyear.",
              })}
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
            {errors.pyear && (
              <p className="text-danger" role="alert">
                {errors.pyear.message}
              </p>
            )}
          </div>
          {/* desciptiion*/}
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              {...register("descriptioin", {
                required: "Plase Provide price.",
              })}
              type="text"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
            />
            {errors.descriptioin && (
              <p className="text-danger" role="alert">
                {errors.descriptioin.message}
              </p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Photo
            </label>
            <input
              {...register("img", { required: "Photo is required" })}
              type="file"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            {errors.img && (
              <p className="text-danger" role="alert">
                {errors.img?.message}
              </p>
            )}
          </div>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}

          {/* <p>{data}</p> */}
          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
