import Cart from "./Cart";
//import img from "./Cart/img"
//import styles from "./styles/global.scss"
import Component from "./Component";
import { BrowserRouter , Route, Routes } from "react-router-dom";
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import ReactDOM from "react-dom/client";
import React from "react";



const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Cart />} />
    <Route path="about" element={<Component />} />
   </Routes>
    </BrowserRouter>
  );
};
export default App;
