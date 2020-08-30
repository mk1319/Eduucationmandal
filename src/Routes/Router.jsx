import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Views/Home";
import Header from "../Components/Header";
import Courses from "../Views/Courses";
import NotFound_404 from "../Views/NotFound_404";
import Class from "../Views/Class";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/class" exact component={Courses} />
        <Route path="/class/:classname/:id" component={Class} />
        <Route component={NotFound_404} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
