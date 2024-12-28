import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Contact from "./components/Contact.jsx";
import Body from "./components/Body";
import ResturantMenu from "./components/ResturantMenu.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/Cart.jsx";

const appRouter = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <ResturantMenu/>
      },
      {
        path:"/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
