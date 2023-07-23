import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Card from "./Card.jsx";

import { getAllCars } from "../../services/cars-service.js";
import { useNavigate } from "react-router";

const Home = () => {
  let [cars, setCars] = useState([]);
  const navigate = useNavigate();
  let handleCars = async () => {
    let data = await getAllCars();

    setCars(data);
  };

  let handleAdd = async () => {
    navigate("/add-car");
  };

  useEffect(() => {
    handleCars();
  }, []);

  return (
    <>
      <h1>Car Management</h1>
      <button className="addBtn" onClick={handleAdd}>
        Add a new car
      </button>
      <select name="sort" className="sort">
        <option value="sort">--Sort by--</option>
        <option value="year">Sort by year</option>
        <option value="model">Sort by model</option>
        <option value="price">Sort by price</option>
      </select>
      <div className="container-cards">
        {cars.length > 0 ? (
          cars.map((item) => {
            return <Card car={item} allCars={handleCars} />;
          })
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </div>
    </>
  );
};

export default Home;
