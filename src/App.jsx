import React from "react";

import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import Card from "./components/Home/Card";
import Add from "./components/Add/Add";
import Example from "./components/Add/example";
import Update from "./components/Update/Update";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-car" element={<Add />} />
          <Route path="/update-car/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
