import React from "react";
import { useQuery } from "@tanstack/react-query";

const AllSellers = () => {
  const { data: seller = [], refetch } = useQuery({
    queryKey: ["seller"],
    queryFn: async () => {
      const res = await fetch(`https://y-tau-blond.vercel.app/users/seller`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="mt-2">
      <div className="">
        <div className="mt-3">
          <h2>All Sellers</h2>
          <div className="shadow-lg rounded">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Name</th>
                  <th scope="col">email</th>
                  <th scope="col">role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {seller &&
                  seller?.map((user, i) => (
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
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
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

export default AllSellers;
