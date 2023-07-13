import React from "react";
import { useForm } from "react-hook-form";
import { updatePutCar } from "../../services/cars-service";

const Update = ({ car }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: car, // Set the default values of the form from the car object
  });

  const onSubmit = async (data) => {
    console.log(data);
    await updatePutCar(data);
  };

  return (
    <div className="col-md-9 personal-info">
      <h3>Update this car</h3>

      <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label className="col-lg-3 control-label">Make:</label>
          <div className="col-lg-8">
            <input
              className="form-control make"
              type="text"
              name="make"
              {...register("make")}
            />
            {errors.make && <span>{errors.make.message}</span>}
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
            {errors.model && <span>{errors.model.message}</span>}
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
            {errors.year && <span>{errors.year.message}</span>}
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
            {errors.color && <span>{errors.color.message}</span>}
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
            {errors.price && <span>{errors.price.message}</span>}
          </div>
        </div>
        <button type="submit" className="editCar">
          Update
        </button>
        <button type="button" className="cancelEdit">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Update;
