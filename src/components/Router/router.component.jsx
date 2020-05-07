import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shortener from "../URL Shortener/shortener.component";
import Homepage from "../Home/home.component";
export default function () {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/short">
          <Shortener link={"#"} />
        </Route>
      </Switch>
    </Router>
  );
}
