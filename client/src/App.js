import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

//Import Components
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
