import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import Homie from "./pages/Homie";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Login from "./pages/Login"

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homie} />
        <Route exact path="/login" component={Login} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
