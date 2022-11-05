import "./App.css";
import React from "react";
import Products from "./components/products/Products";
import Item from "./components/item/item";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello</h1>
        <Routes>
          <Route path="products" element={<Products />}></Route>
          <Route path="/products/item/:id" element={<Item />} />
        </Routes>
      </div>
    </Router>
  );
}
