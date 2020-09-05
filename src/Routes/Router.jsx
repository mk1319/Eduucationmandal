import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../Views/Home";
import Courses from "../Views/Courses";
import NotFound_404 from "../Views/NotFound_404";
import Class from "../Views/Class";
import Profile from "../Views/Profile";
import Blogs from "../Views/Blogs";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact>
          <Redirect to="/" />
        </Route>
        <Route path="/class" exact component={Courses} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/class/:classname/:id" component={Class} />
        <Route path="/Teacher/:name/:id" component={Profile} />
        <Route path="/Student/:name/:id" component={Profile} />
        <Route component={NotFound_404} />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
