import React from "react";
import { Router } from "@reach/router";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";
import Pizza from "./Pizza";

const Routes = () => (
  <Router>
    <StorePicker path="/" />
    <App path="/store/:storeId" />
    {/* TODO: Hook up the new Pizza component to render @ "/secret-dinner" */}
    <Pizza path="/secret-dinner" />
    {/* HINT: You need to write code 👇 and also 👆 */}
    <NotFound default />
  </Router>
);

export default Routes;
