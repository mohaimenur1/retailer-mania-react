import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const BookingModal = ({ product }) => {
  console.log(product);
  const { user } = useContext(AuthContext);
  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const username = form.name.value;
    const title = form.title.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const meetingpalace = form.meetingpalace.value;

    const booking = {
      username: username,
      producttitle: title,
      email,
      phone,
      price,
      meetingpalace,
      userId: product._id,
    };
    // fetch("http://localhost:5000/bookings", {
    //   method: "POST",
    //   headers: {
    //     "content-Type": "application/json",
    //   },
    //   body: JSON.stringify(booking),
    // }).then((data) => {
    //   console.log(data);
    //   setTreatment(null);
    //   toast("Booking confirm.");
    //   refetch();
    // });

    console.log(booking);
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h1 className="modal-title fs-5" id="exampleModalLabel">
                title
              </h1> */}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleBooking}>
                <div className="form-outline">
                  <label className="form-label" htmlFor="formControlLg">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="formControlLg"
                    name="title"
                    value={product?.title}
                    disabled
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="formControlLg">
                    Product Price
                  </label>
                  <input
                    type="text"
                    id="formControlLg"
                    name="price"
                    value={`${product?.resaleprice} k`}
                    disabled
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline">
                  <label className="form-label" htmlFor="formControlLg">
                    User Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={user?.displayName}
                    disabled
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="formControlLg">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    disabled
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="formControlLg">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                </div>
                <div className="form-outline">
                  <label className="form-label" htmlFor="formControlLg">
                    Meeting Location
                  </label>
                  <input
                    type="text"
                    name="meetingpalace"
                    id="formControlLg"
                    className="form-control form-control-lg"
                  />
                </div>
                <button
                  onClick=""
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-primary w-100 mt-3"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
