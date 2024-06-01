import "./App.css";
import React from "react";
import Header from "./Components/Header";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";
import { createBrowserRouter } from "react-router-dom";
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AllProducts />,
  },
  {
    path: "/product/:id",
    element: <SingleProduct />,
  },
]);
function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
