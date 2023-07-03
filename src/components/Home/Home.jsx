import React, { useEffect, useState } from "react";

import Card from "./Card.jsx";

import { getAllCars } from "../../services/cars-service.js";

const Home = () => {
  let [cars, setCars] = useState([]);

  let handleCars = async () => {
    let data = await getAllCars();

    setCars(data);
  };

  useEffect(() => {
    handleCars();
  }, []);

  return (
    <>
      <h1>Car Management</h1>
      <button className="addBtn">Add a new car</button>
      <select name="sort" className="sort">
        <option value="sort">--Sort by--</option>
        <option value="year">Sort by year</option>
        <option value="model">Sort by model</option>
        <option value="price">Sort by price</option>
      </select>
      <div className="container-cards">
        {cars.length > 0 &&
          cars.map((item) => {
            return <Card car={item} />;
          })}
      </div>
    </>
  );
};

export default Home;
