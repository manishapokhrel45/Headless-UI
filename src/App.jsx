import "./App.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import React, { useContext } from "react";

import AppRoutes from "./AppRoutes";

import Layout from "./layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
