import "./App.css";
import React, { useState, useEffect, useReducer } from "react";
import { cartReducer } from "./components/reducers/cartReducer";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";

export default function App() {
  const fetchProducts = async () => {
    const respond = await fetch("https://dummyjson.com/products");
    const data = await respond.json();
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
    console.log(data);
  };

  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  useEffect(() => {
    fetchProducts();
    return () => {
      console.log("clean done ! now run ");
    };
  }, []);

  console.log(state);
  return (
    <div className="App">
      <Products state={state} dispatch={dispatch}></Products>
      <Cart state={state} dispatch={dispatch}></Cart>
    </div>
  );
}
