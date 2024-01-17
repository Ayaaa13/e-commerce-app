import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EatnrunApp from "./pages/EatnrunApp";
// import CalculatorApp from "./pages/CalculatorApp";
// import EatnrunSignup from "./components/EatnrunSignup";
import EatnrunSignin from "./components/EatnrunSignin";
import EatnrunHome from "./components/EatnrunHome";
import EatnrunCart from "./components/EatnrunCart";

const router = createBrowserRouter([
  {
    path: "",
    element: <EatnrunHome />,
  },
  {
    path: "/overview",
    element: <EatnrunApp />,
  },

  // { path: "/overview", element: <EatnrunApp /> },
  // { path: "/CalculatorApp", element: <CalculatorApp /> },
  // { path: "/EatNRunAppSignUp", element: <EatnrunSignup /> },
  { path: "/signin", element: <EatnrunSignin /> },
  { path: "/home", element: <EatnrunHome /> },
  { path: "/cart", element: <EatnrunCart /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
