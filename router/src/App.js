import React from "react";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Home from "./Home";
import Post from "./Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
