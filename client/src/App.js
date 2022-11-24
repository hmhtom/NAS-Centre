import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Pages
import Home from "./pages/Home";

//Import Components
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
