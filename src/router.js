import React from "react";
import { Switch, Route } from "react-router";
import Page1 from "./componets/Page1";
import Login from "./componets/Login";
import Home from "./componets/Home";
import blog from "./componets/blog";
import about from "./componets/about"
import safelocations from "./componets/safelocations";



const Router = () => {
    console.log('env process in router',process.env)
  return (
    <Switch>
      <Route exact path="/" component={Page1} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home}/>
      <Route path="/blog" component={blog}/>
      <Route path="/about" component={about}/>
      <Route path="/safelocations" component={safelocations}/>

    </Switch>
  );
};

export default Router;