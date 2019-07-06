import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import App from "../App";
import NotFound from "./NotFound";
import Home from "./Home";
import About from "./About";

const Router = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/quiz" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
