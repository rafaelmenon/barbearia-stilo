import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Route";
import Login from "../pages/login";
import Index from "../pages/index";
import Home from "../pages/home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/" exact component={Index} isProtected />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
