import React, { useState } from "react";
import { addCar } from "../../services/cars-service";
import Toast from "react-bootstrap/Toast";
import { useForm } from "react-hook-form";

const Add = () => {
  const [show, setShow] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await addCar(data);
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

  return (
    <>
      <div className="container-new bootstrap snippets bootdey">
        <h1 className="text-primary">Car Management</h1>
        <hr />
        <div className="row">
          <div className="col-md-9 personal-info">
            <h3>Add a new Car</h3>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="col-lg-3 control-label">Make:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control make"
                    type="text"
                    name="make"
                    {...register("maker")}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Model:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control model"
                    type="text"
                    name="model"
                    {...register("model")}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Year:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control year"
                    type="text"
                    name="year"
                    {...register("year")}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Color:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control color"
                    type="text"
                    name="color"
                    {...register("color")}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Price:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control price"
                    type="text"
                    name="price"
                    {...register("price")}
                  />
                  {errors.name && <span>{errors.name.message}</span>}
                </div>
              </div>

              <button type="submit" className="submitCar">
                Submit
              </button>
              <button className="cancelNew">Cancel</button>
            </form>
          </div>
        </div>
      </div>

      <div>
        {/* {err.length > 0 &&
          err.map((e) => {
            return notificationError(e);
          })} */}
      </div>
    </>
  );
};

export default Add;
