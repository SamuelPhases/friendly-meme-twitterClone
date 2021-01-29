import React from "react";
import Header from "./components/Header";

import Home from "./Home";
import Lists from "./Lists";
import Explore from "./Explore";
import Notification from "./Notification";
import Bookmark from "./Bookmark";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/explore">
            <Explore />
          </Route>
        </Switch>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/notifications">
            <Notification />
          </Route>
        </Switch>
        <Switch>
          <Route path="/i/bookmarks">
            <Bookmark />
          </Route>
        </Switch>
        <Switch>
          <Route path="/lists">
            <Lists />
          </Route>
        </Switch>
        <Switch>
          <Route path="/Lorem__Ip">
            <Profile />
          </Route>
        </Switch>

        {/* <Feed />
      <Trends /> */}
      </Router>
    </div>
  );
}

export default App;
