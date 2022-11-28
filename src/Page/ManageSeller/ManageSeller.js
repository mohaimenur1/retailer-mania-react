/** @format */

import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const ManageSeller = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      //   try {
      const res = await fetch(
        `https://y-tau-blond.vercel.app/products?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();
      return data;
      //   } catch (error) {}
    },
  });
  return (
    <div className="mt-2">
      <div className="">
        <div className="mt-3">
          <h2>My Products</h2>
          <div className="shadow-lg rounded">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products?.map((product, i) => (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>
                      {/* <td>
                      {" "}
                      <img
                        className="img-fluid rounded-4"
                        src={user.img}
                        alt=""
                        style={{ widht: "3rem", height: "3rem" }}
                      />
                    </td> */}
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>
                        <button className="btn btn-primary btn-sm">
                          Status
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </td>
                      {/* <td>
                      <Link to="/dashboard/payment" className="btn btn-primary">
                        Pay
                      </Link>
                    </td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSeller;
