import React from "react";
import { useQuery } from "@tanstack/react-query";

const AllBuyers = () => {
  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/user`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="mt-2">
      <div className="">
        <div className="mt-3">
          <h2>All Buyrs</h2>
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
                {user &&
                  user?.map((us, i) => (
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
                      <td>{us.name}</td>
                      <td>{us.email}</td>
                      <td>{us.role}</td>
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

export default AllBuyers;
