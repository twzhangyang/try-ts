import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import Post from "./Post";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Header</h1>
          <ul>
            <Link to="/"> <li>Home</li> </Link>
            <Link to="/posts"> <li>Posts</li> </Link>
            <Link to="/about"> <li>About</li> </Link>
          </ul>
        </header>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/posts" exact component={Posts}></Route>
          <Route path="/post/:id" exact component={Post}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
