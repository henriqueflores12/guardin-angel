import React from "react";
import { Switch, Route } from "react-router";
import Page1 from "./components/Page1";
import Login from "./components/Login";
import Home from "./components/Home";
import blog from "./components/blog";
import about from "./components/about";
import safelocations from "./components/safelocations";

const Router = () => {
  console.log("env process in router", process.env);
  return (
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/blog" component={blog} />
      <Route path="/about" component={about} />
      <Route path="/safelocations" component={safelocations} />
    </Switch>
  );
};

export default Router;
