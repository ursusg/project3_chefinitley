import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Homie from "./pages/Homie";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homie} />
        <Route exact path="/login" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
