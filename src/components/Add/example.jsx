import React from "react";
import { useForm } from "react-hook-form";

const ExampleForm = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          {...register("passowrd", { required: "Password is required" })}
        />
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ExampleForm;
