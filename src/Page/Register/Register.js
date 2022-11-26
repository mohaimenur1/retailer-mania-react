import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { AuthContext } from "../../context/UserContext";
import useToken from "../../hooks/useToken";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const { registerUser, updateUserProfile } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  // if (token) {
  //   navigate("/");
  // }

  const handleRegister = (data) => {
    console.log(data);
    setErrorMessage("");
    registerUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User Created Successfully");
        navigate("/");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };

        updateUserProfile(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage(err.message);
      });
  };

  const saveUser = (name, email) => {
    const user = {
      name,
      email,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setCreatedUserEmail(email);
      });
  };

  return (
    <div className="container card p-5 mt-5">
      <h2 className="text-center display-5 fw-semibold">Register</h2>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
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
            {...register("email", { required: "Plase Provide Email Address." })}
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            {...register("password", {
              required: "Please provide Password",
              maxLength: { value: 8, message: "Not more than 6" },
              minLength: { value: 4, message: "Must be 4 charecters" },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                message:
                  "Password must 1 uppercase, 1 special charecter and a number.",
              },
            })}
            type="password"
            className="form-control"
            id="exampleInputPassword3"
          />
          {errors.password && (
            <p className="text-danger" role="alert">
              {errors.password?.message}
            </p>
          )}
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label className="form-check-label" for="flexRadioDefault2">
            User
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            Seller
          </label>
        </div>

        <div className="mb-3">
          <p className="text-center" htmlFor="exampleCheck1">
            <Link to="/login">Already have an account?</Link>
          </p>
        </div>
        {/* <p>{data}</p> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Register;
