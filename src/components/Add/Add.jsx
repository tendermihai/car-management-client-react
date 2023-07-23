import React, { useState } from "react";
import { addCar } from "../../services/cars-service";
import Toast from "react-bootstrap/Toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const Add = () => {
  const [show, setShow] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // checkErrors();
    // console.log(data);
    // await addCar(data);
  };

  let handleCancel = async () => {
    navigate("/");
  };

  return (
    <>
      <div className="container-new bootstrap snippets bootdey">
        <h1 className="text-primary">Car Management</h1>
        <hr />
        <div className="row">
          <div className="col-md-9 personal-info">
            <h3>Add a new Car</h3>

            <form onSubmit={handleSubmit(onSubmit)} onChange={() => {}}>
              <div className="form-group">
                <label className="col-lg-3 control-label">Make:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control make"
                    type="text"
                    name="make"
                    {...register("maker", { required: true })}
                  />
                  {errors.maker && <span>This field is required</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Model:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control model"
                    type="text"
                    name="model"
                    {...register("model", { required: true })}
                  />
                  {errors.model && <span>This field is required</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Year:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control year"
                    type="text"
                    name="year"
                    {...register("year", { required: true })}
                  />
                  {errors.year && <span>This field is required</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Color:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control color"
                    type="text"
                    name="color"
                    {...register("color", { required: true })}
                  />
                  {errors.color && <span>This field is required</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Price:</label>
                <div className="col-lg-8">
                  <input
                    className="form-control price"
                    type="text"
                    name="price"
                    {...register("price", { required: true })}
                  />
                  {errors.maker && <span>This field is required</span>}
                </div>
              </div>

              <button type="submit" className="submitCar">
                Submit
              </button>
              <button className="cancelNew" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
