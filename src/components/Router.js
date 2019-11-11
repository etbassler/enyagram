import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import NotFound from "./NotFound";
import Home from "./Home";
import About from "./About";

const Router = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
      <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
      <Route path={process.env.PUBLIC_URL + "/quiz"} component={App} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Router;
