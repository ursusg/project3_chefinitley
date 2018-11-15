import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
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
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer"
import PdfPage from "./pages/PdfPage"
import fire from "./config/Fire"


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentDidMount() {
    this.authListener();
  }

  // Auth listener from Firebase that understands when a user is signed in.
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
      }
    });
    this.authListener = this.authListener.bind(this)
  }

  render() {
    return (
      <div className="App">{this.state.user ? (<Homie />) : (<Login />)}</div>
      // <Router>
      //   <div>

      //     <Navbar />
      //     <Switch>
      //       <Route exact path="/" component={Homie} />
      //       <Route exact path="/login" component={Login} />
      //       <Route exact path="/signup" component={Signup} />
      //       <Route exact path="/signupcustomer" component={SignUpCustomer} />
      //       <Route exact path="/about" component={About} />
      //       <Route exact path="/feed" component={Feed} />
      //       <Route exact path="/startupguide" component={StartUpGuide} />
      //       <Route exact path="/pdf/:id" component={PdfPage} />
      //       <Route exact path="/dashboard" component={Dashboard} />
      //       {/* <Route component={NoMatch} /> */}
      //     </Switch>
      //     <Footer />
      //   </div>
      // </Router>
        
    )
  }
};

export default App;
