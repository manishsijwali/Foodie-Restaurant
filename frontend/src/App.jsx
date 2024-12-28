import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <Navbar />
      <Outlet/>
    </Provider> 
  );
};

export default App;
