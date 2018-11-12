import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./pages/Home";
import Homie from "./pages/Homie";
// import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUpCustomer from "./pages/SignUpCustomer";
import About from "./pages/About";
import Feed from "./pages/FeedPage"
import StartUpGuide from "./pages/StartUpGuide";
import Footer from "./components/Footer"
import PdfPage from "./pages/PdfPage"


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homie} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signupcustomer" component={SignUpCustomer} />
        <Route exact path="/about" component={About} />
        <Route exact path="/feed" component={Feed} />
        <Route exact path="/startupguide" component={StartUpGuide} />
        <Route exact path="/pdf" component={PdfPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
