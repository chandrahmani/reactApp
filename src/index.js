import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bike, { Detail, Price, Contact } from "./components/bikeDetails/Bike";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<Bike />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/price" element={<Price />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/abc/my" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
