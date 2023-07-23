import React, { useState } from "react";
import { delCar } from "../../services/cars-service";
import Toast from "react-bootstrap/Toast";
import { useNavigate } from "react-router";
import { findCarById } from "../../services/cars-service";

const Card = ({ car, allCars }) => {
  const [show, setShow] = useState("");
  const navigate = useNavigate();
  const handleDelete = async () => {
    let data = await delCar(car.id);

    allCars();
  };

  let notificationError = (message) => {
    console.log("ceva eroare");
    return (
      <Toast onClose={() => setShow(false)} show={show}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    );
  };

  let handleUpdate = async () => {
    navigate(`/update-car/${car.id}`);
  };

  return (
    <>
      <div className="card-body p-4">
        <span
          className="badge delete rounded-pill bg-primary float-md-end mb-3 mb-sm-0"
          onClick={handleDelete}
        >
          Delete
        </span>
        <h5>{car.model}</h5>
        <div className="mt-3">
          <span className="text-muted d-block">
            <i className="fa fa-car" aria-hidden="true"></i>
            ID: {car.id}
          </span>
          <span className="text-muted d-block">
            <i className="fa fa-car" aria-hidden="true"></i>
            Make: {car.maker}
          </span>
          <span className="text-muted d-block">
            <i className="fa fa-car" aria-hidden="true"></i>
            Model: {car.model}
          </span>
          <span className="text-muted d-block">
            <i className="fa fa-car" aria-hidden="true"></i>
            Year: {car.year}
          </span>
          <span className="text-muted d-block">
            <i className="fa fa-car" aria-hidden="true"></i>
            Color: {car.color}
          </span>
          <span className="text-muted d-block">
            <i className="fa fa-car" aria-hidden="true"></i>
            Price: {car.price}
          </span>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary btn-update"
            id="id-${car.id}"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
